from imutils.object_detection import non_max_suppression
from imutils import paths
import numpy as np
import imutils
import cv2
import math
import random
import requests

hog = cv2.HOGDescriptor()
hog.setSVMDetector(cv2.HOGDescriptor_getDefaultPeopleDetector())
MAX_DIST = 75
stores = ["A", "B", "C", "D"]

class VideoCamera(object):
	def __init__(self):
		self.video = cv2.VideoCapture(0)
    
	def __del__(self):
		self.video.release()
	
	def detect_people(self, frame):
		gray = cv2.cvtColor(frame, cv2.COLOR_RGB2GRAY)
		
		(rects, weights) = hog.detectMultiScale(frame, winStride=(8, 8), scale=1.05)
		rects = np.array([[x, y, x + w, y + h] for (x, y, w, h) in rects])
		pick = non_max_suppression(rects, probs=None, overlapThresh=0.5)
	
		return pick

	def get_violating_distances(self, people_squares):
		violations = set()
		if len(people_squares) > 2:
			for (x_a_first, y_a_first, x_b_first, y_b_first) in people_squares:
				for (x_a_snd, y_a_snd, x_b_snd, y_b_snd) in people_squares:
					if (x_a_first, y_a_first, x_b_first, y_b_first) != (x_a_snd, y_a_snd, x_b_snd, y_b_snd):
						center_x_first, center_y_first = ((x_a_first + x_b_first)/2, (y_a_first + y_b_first)/2)
						center_x_snd, center_y_snd = ((x_a_snd + x_b_snd)/2, (y_a_snd + y_b_snd)/2)
						dist = math.sqrt(abs(center_x_snd - center_x_first)*2 + abs(center_y_snd - center_y_snd)*2)
						if (dist < MAX_DIST):
							report = {"timestamp": time.time(), "error": "Social distance violated", "store": stores[random.randint(0, 3)]}
							requests.post(report_endpoint, json=report)
							violations.add((x_a_first, y_a_first, x_b_first, y_b_first))
							violations.add((x_a_first, y_a_first, x_b_first, y_b_first))
		return violations

	def get_frame(self):
		ret, frame = self.video.read()
		people_squares = self.detect_people(frame)
		violations = self.get_violating_distances(people_squares)
		for (xA, yA, xB, yB) in people_squares:
        		cv2.rectangle(frame, (xA, yA), (xB, yB),
				(0, 255, 0) if (xA, yA, xB, yB) not in violations else (0, 0, 255), 2)
		ret, jpeg = cv2.imencode('.jpg', frame)
		return jpeg.tobytes()
