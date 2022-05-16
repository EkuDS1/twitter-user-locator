from flask import Flask, send_from_directory
from util import *
from flask_cors import CORS #comment this on deployment
from APIHandler import APIHandler
from flask_restful import Api, Resource, reqparse
from TwitterAPI import TwitterAPI 
from loc_model import Model

app = Flask(__name__,static_url_path='',static_folder='interface/my-app/src')
CORS(app)
tapi=TwitterAPI()
m=Model()
model=m.getModel()
api=Api(app)

@app.route("/")
def hello_world():
    return send_from_directory(app.static_folder,'index.js')

api.add_resource(APIHandler,'/<string:username>',resource_class_args=(tapi,model))