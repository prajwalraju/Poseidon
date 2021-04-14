import json
import sys
import random
import eel
import os
import cv2
import time


eel.init('gui')


def predect():
    #import tensorflow.keras
    #from PIL import Image, ImageOps
    #import numpy as np

    #np.set_printoptions(suppress=True)

    #model = tensorflow.keras.models.load_model('keras_model.h5', compile=False)
    #data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)

    #image = Image.open('test_photo.jpg')

    #size = (224, 224)
    #image = ImageOps.fit(image, size, Image.ANTIALIAS)

    #image_array = np.asarray(image)
    #normalized_image_array = (image_array.astype(np.float32) / 127.0) - 1

    #data[0] = normalized_image_array

    #prediction = model.predict(data)
    #lis = prediction.tolist()[0]
    #return (lis.index(max(lis)))
    return


@eel.expose
def openCamera():

    # print('amout of particles are', random.randrange(100, 1000, 100))
    # print('Dimention of particles is', random.randrange(100, 1000, 100))

    cam1 = cv2.VideoCapture(1)
    cam2 = cv2.VideoCapture(2)

    cv2.namedWindow("Capture frame")

    while True:
        ret1, frame1 = cam1.read()
        ret2, frame2 = cam2.read()

        if not ret1:
            print("failed to grab frame of camera 0")
            break
        cv2.imshow("frame1", frame1)

        if not ret2:
            print("failed to grab frame of camera 1")
            break
        cv2.imshow("frame2", frame2)

        k = cv2.waitKey(1)
        if k % 256 == 27:
            # ESC pressed
            print("Escape hit, closing...")
            break
        elif k % 256 == 32:
            # SPACE pressed

            frontImage = "CurrFrontImage.png"
            topImage = "currTopImage.png"

            cv2.imwrite("gui/img/openCamera/"+frontImage, frame1)

            cv2.imwrite("data_images/"+frontImage, frame1)
            cv2.imwrite("data_images/"+topImage, frame2)
            print("written!")
            break

    cam1.release()
    cam2.release()

    cv2.destroyAllWindows()

    return


@eel.expose
def analyse():

    # predect()
    amount = random.randrange(100, 1000, 100)
    size = random.randrange(100, 400, 100)
    return [amount, size]


@eel.expose
def collect(folder, file):

    print(folder, file)

    if(folder[-1] != "/"):
        folder = folder+"/"
    if(file[-1] != "/"):
        file = file+"/"

    cam1 = cv2.VideoCapture(1)
    cam2 = cv2.VideoCapture(2)

    cv2.namedWindow("Capture frame")
    while True:
        ret1, frame1 = cam1.read()
        ret2, frame2 = cam2.read()

        if not ret1:
            print("failed to grab frame of camera 0")
            break
        cv2.imshow("frame1", frame1)

        if not ret2:
            print("failed to grab frame of camera 1")
            break
        cv2.imshow("frame2", frame2)

        k = cv2.waitKey(1)
        if k % 256 == 27:
            # ESC pressed
            print("Escape hit, closing...")
            break
        elif k % 256 == 32:
            # SPACE pressed

            timestr = time.strftime("%Y%m%d-%H%M%S")
            newpath = (folder+file+timestr+"/")
            if not os.path.exists(newpath):
                os.makedirs(newpath)

            frontImage = "frontImage.png"
            topImage = "topImage.png"

            cv2.imwrite("gui/img/collect/"+frontImage, frame1)

            cv2.imwrite(newpath+frontImage, frame1)
            cv2.imwrite(newpath+topImage, frame2)
            print("written!")
            break

    cam1.release()
    cam2.release()

    cv2.destroyAllWindows()
    return newpath


sys.stdout.flush()
eel.start('index.html', size=(1920, 1080))
