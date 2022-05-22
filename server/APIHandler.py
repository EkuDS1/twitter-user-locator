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

        # c=self.model.predict(text)                    
        # d=c[0].tolist()                               #   CONVERT TO LIST FOR SERIALIZATION
        # geoxml=reverseGeocode(d[0],d[1])              #   CONVERT TO COUNTRY
        coord=forwardGeocode(loc)
        print(coord[0],coord[1],type(coord[0]),type(coord[1]))
        if (coord[0]>float(60.0) or (coord[0]<float(0.0))) and (coord[1]>float(-50.0)) or (coord[1] < float(-100.0)):
            print(coord)
            coord[0]=40.7128;coord[1]=74.0060
        concat={"lat":coord[0],"long":coord[1],"location":loc}
        return concat 

    