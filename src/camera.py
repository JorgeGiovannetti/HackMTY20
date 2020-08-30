from imutils.object_detection import non_max_suppression
from imutils import paths
import numpy as np
import imutils
import cv2
import math


hog = cv2.HOGDescriptor()
hog.setSVMDetector(cv2.HOGDescriptor_getDefaultPeopleDetector())

class VideoCamera(object):
	def __init__(self):
		self.video = cv2.VideoCapture(0)
    
	def __del__(self):
		self.video.release()
	
	def detect_people(self, frame):
		#height, width, channel = frame.shape
		#frame = cv2.resize(frame, (320, 240))
		
		
		scale_h = 1#height/320
		scale_w = 1#width/240
		
		
		gray = cv2.cvtColor(frame, cv2.COLOR_RGB2GRAY)
		#ret,frame = cv2.threshold(frame,80,255,cv2.THRESH_BINARY)
		
		(rects, weights) = hog.detectMultiScale(frame, winStride=(8, 8), scale=1.05)
		rects = np.array([[x*scale_w, y*scale_h, (x + w)*scale_w, (y + h)*scale_h] for (x, y, w, h) in rects])
		pick = non_max_suppression(rects, probs=None, overlapThresh=0.5)
	
		return pick

	def get_frame(self):
		ret, frame = self.video.read()
		people_squares = self.detect_people(frame)
		for (xA, yA, xB, yB) in people_squares:
        		cv2.rectangle(frame, (xA, yA), (xB, yB), (0, 255, 0), 2)
		ret, jpeg = cv2.imencode('.jpg', frame)
		return jpeg.tobytes()
