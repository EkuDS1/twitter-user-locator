from lib2to3.pytree import convert
import pandas as pd
import tensorflow as tf
import string
import requests 

AUTOTUNE = tf.data.AUTOTUNE
#   CONFIGURES DATASET FOR PERFORMANCE 
def configure_dataset(dataset):
  return dataset.cache().prefetch(buffer_size=AUTOTUNE)

#   PREPROCESS TWEETS FOR MODEL
def preprocess_tweets():
    data_path='output.csv'
    df = pd.read_csv(data_path,on_bad_lines='skip')
    text=df['tweet'].str.replace('[^\w\s]','')
    
    
    text_ds=tf.data.Dataset.from_tensor_slices(text)
    text_ds=configure_dataset(text_ds)
    
    return text_ds.batch(10)

def reverseGeocode(lat,lng):
    url=f"http://api.geonames.org/findNearbyPlaceName?lat={lat}&lng={lng}&username=vinxi"
   
    response=requests.get(url)
    return response.text
