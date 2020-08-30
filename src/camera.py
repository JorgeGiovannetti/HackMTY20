from imutils.object_detection import non_max_suppression
from imutils import paths
import numpy as np
import imutils
import cv2
import math
import random
import requests
from datetime import datetime, date
from tensorflow.keras.applications.mobilenet_v2 import preprocess_input
from tensorflow.keras.preprocessing.image import img_to_array
from tensorflow.keras.models import load_model
from imutils.video import VideoStream
import argparse
import time
import os


hog = cv2.HOGDescriptor()
hog.setSVMDetector(cv2.HOGDescriptor_getDefaultPeopleDetector())
MAX_DIST = 75
stores = ["A", "B", "C", "D"]
report_endpoint = "https://us-central1-posty-ecd9b.cloudfunctions.net/helloWorld"
confidence = .6


class VideoCamera(object):
    def __init__(self):
        self.video = cv2.VideoCapture(1)
        self.last_time_distance = time.time()
        self.last_time_mask = time.time()
        self.prototxtPath = os.path.sep.join(
            ["face_detector", "deploy.prototxt"])
        self.weightsPath = os.path.sep.join(
            ["face_detector", "res10_300x300_ssd_iter_140000.caffemodel"])
        self.faceNet = cv2.dnn.readNet(self.prototxtPath, self.weightsPath)

        self.maskNet = load_model("mask_detector.model")

    def __del__(self):
        self.video.release()

    # def detect_people(self, frame):
    #    gray = cv2.cvtColor(frame, cv2.COLOR_RGB2GRAY)

    #    (rects, weights) = hog.detectMultiScale(
    #        frame, winStride=(8, 8), scale=1.05)
    #    rects = np.array([[x, y, x + w, y + h] for (x, y, w, h) in rects])
    #    pick = non_max_suppression(rects, probs=None, overlapThresh=0.5)

    #    return pick

    def detect_and_predict_mask(self, frame, faceNet, maskNet):
        (h, w) = frame.shape[:2]
        blob = cv2.dnn.blobFromImage(frame, 1.0, (300, 300),
                                     (104.0, 177.0, 123.0))

        faceNet.setInput(blob)
        detections = faceNet.forward()

        faces = []
        locs = []
        preds = []

        for i in range(0, detections.shape[2]):
            confidence = detections[0, 0, i, 2]

            if confidence > confidence:
                box = detections[0, 0, i, 3:7] * np.array([w, h, w, h])
                (startX, startY, endX, endY) = box.astype("int")

                (startX, startY) = (max(0, startX), max(0, startY))
                (endX, endY) = (min(w - 1, endX), min(h - 1, endY))

                face = frame[startY:endY, startX:endX]
                face = cv2.cvtColor(face, cv2.COLOR_BGR2RGB)
                face = cv2.resize(face, (224, 224))
                face = img_to_array(face)
                face = preprocess_input(face)

                faces.append(face)
                locs.append((startX, startY, endX, endY))

        if len(faces) > 0:
            faces = np.array(faces, dtype="float32")
            preds = maskNet.predict(faces, batch_size=32)

        return (locs, preds)

    def get_violating_distances(self, people_squares):
        violations = set()
        if len(people_squares) >= 2:
            for (x_a_first, y_a_first, x_b_first, y_b_first) in people_squares:
                for (x_a_snd, y_a_snd, x_b_snd, y_b_snd) in people_squares:
                    if (x_a_first, y_a_first, x_b_first, y_b_first) != (x_a_snd, y_a_snd, x_b_snd, y_b_snd):
                        center_x_first, center_y_first = (
                            (x_a_first + x_b_first)/2, (y_a_first + y_b_first)/2)
                        center_x_snd, center_y_snd = (
                            (x_a_snd + x_b_snd)/2, (y_a_snd + y_b_snd)/2)
                        dist = math.sqrt(
                            abs(center_x_snd - center_x_first)*2 + abs(center_y_snd - center_y_snd)*2)
                        if (dist < MAX_DIST):
                            now = time.time()
                            if (now - self.last_time_distance) > 2:
                                report = {"timestamp": time.time(
                                ), "error": "Social distance violated", "store": stores[random.randint(0, 3)]}
                                requests.post(report_endpoint, json=report)
                                self.last_time_distance = time.time()
                            violations.add(
                                (x_a_first, y_a_first, x_b_first, y_b_first))
                            violations.add(
                                (x_a_first, y_a_first, x_b_first, y_b_first))
        return violations

    def get_frame(self):
        ret, frame = self.video.read()

        (locs, preds) = self.detect_and_predict_mask(
            frame, self.faceNet, self.maskNet)
        violations = self.get_violating_distances(locs)

        for (box, pred) in zip(locs, preds):
            (startX, startY, endX, endY) = box
            (mask, withoutMask) = pred

            label = "Mask" if mask > withoutMask else "No Mask"
            if label == "No Mask":
                now = time.time()
                if (now - self.last_time_mask) > 2:
                    report = {"timestamp": time.time(
                    ), "error": "Face mask violation", "store": stores[random.randint(0, 3)]}
                    requests.post(report_endpoint, json=report)
                    self.last_time_mask = time.time()
            color = (0, 0, 255) if label != "Mask" or (
                startX, startY, endX, endY) not in violations else (0, 255, 0)

            label = "{}: {:.2f}%".format(label, max(mask, withoutMask) * 100)

            cv2.putText(frame, label, (startX, startY - 10),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.45, color, 2)
            cv2.rectangle(frame, (startX, startY), (endX, endY), color, 2)

        ret, jpeg = cv2.imencode('.jpg', frame)
        return jpeg.tobytes()
