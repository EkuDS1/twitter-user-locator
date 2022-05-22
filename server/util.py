from lib2to3.pytree import convert
import pandas as pd
import tensorflow as tf
import string
import requests 
import json

AUTOTUNE = tf.data.AUTOTUNE
#   CONFIGURES DATASET FOR PERFORMANCE 
def configure_dataset(dataset):
  return dataset.cache().prefetch(buffer_size=AUTOTUNE)

#   PREPROCESS TWEETS FOR MODEL
def preprocess_tweets(df):
    
    text=df['full_text'].str.replace('[^\w\s]','')
    text_ds=tf.data.Dataset.from_tensor_slices(text)
    text_ds=configure_dataset(text_ds)
    
    return text_ds.batch(10)

def reverseGeocode(lat,lng):
    url=f"http://api.geonames.org/findNearbyPlaceName?lat={lat}&lng={lng}&username=vinxi"
   
    response=requests.get(url)
    return response.text

def forwardGeocode(country):
  access_token="pk.eyJ1IjoidmluLXhpIiwiYSI6ImNrejExcnZ0NDBhMW0ydnBxeGw3MnV0M3oifQ.jWgYBYCLnKdiZOdzfoZzhA"
  url=f"https://api.mapbox.com/geocoding/v5/mapbox.places/{country}.json?limit=1&access_token={access_token}"
  response=requests.get(url)
  response=response.content.decode('utf-8')
  response=json.loads(response)
  # print(response.features.geometry)
  features=response["features"]
  return features[0]["center"]
  