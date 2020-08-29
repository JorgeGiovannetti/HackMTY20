import cv2


class VideoCamera(object):
	def __init__(self):
		self.video = cv2.VideoCapture(1)
    
	def __del__(self):
		self.video.release()

	def get_frame(self):
		ret, frame = self.video.read()
		f = open("settings.txt", "r")
		settings = f.read().split(' ')
		frame = cv2.putText(frame, settings[0], (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 1, cv2.LINE_AA)
		ret, jpeg = cv2.imencode('.jpg', frame)
		return jpeg.tobytes()
