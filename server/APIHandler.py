from flask_restful import Api,Resource,reqparse
from TwitterAPI import TwitterAPI 
from loc_model import Model
from util import *

class APIHandler(Resource):
    def __init__(self,tapi,model):
        self.Tapi=tapi      #   TWITTER API 
        self.model=model    #   INFERENCE MODEL 

    def get(self,username):

        loc,df=self.Tapi.collectData(username)        #   RETRIEVE 50 TWEETS OF MENTIONED USER
        text=preprocess_tweets(df)

        c=self.model.predict(text)                    
        d=c[0].tolist()                               #   CONVERT TO LIST FOR SERIALIZATION
        geoxml=reverseGeocode(d[0],d[1])              #   CONVERT TO COUNTRY
        concat={"lat":d[0],"long":d[1],"location":loc}
        return concat 

    