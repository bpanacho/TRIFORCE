import cv2


for i in range(10):
    camera = cv2.VideoCapture(i)
    if not camera.isOpened():
        break
    print(f"Câmera {i}: {camera.getBackendName()}")
    camera.release()
