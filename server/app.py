from flask import Flask
from twitterAPI import API
from loc_model import Model
from util import *


app = Flask(__name__)

  

@app.route("/")
def hello_world():

    api= API()
    m=Model()
    model=m.getModel()

    api.setUsername("PTIofficial")
    api.search()

    text=preprocess_tweets()

    c=model.predict(text)
    geoxml=reverseGeocode(c[0][0],c[0][1])
    concat="<p>"+geoxml+"</p>"
    return concat 

