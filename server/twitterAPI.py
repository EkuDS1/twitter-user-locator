import tweepy
import json
import pandas as pd

class TwitterAPI:
    def __init__(self):
        api_key = "kXJ846QdqF8Zqu6z4TnqUMkEh"
        api_secrets = "k76rU4xx7Fbk6hx4FKYDTUls0qyY8YOKTACoa4JR7ooYiDJZjZ"
        access_token = "904666910142459905-cQNJZHNYoxp27brVjn61hBZ2qduPviK"
        access_secret = "Z9IRhl7R7alZrAvRI3PBSe9cM1Vj8oePErQW6zt9XUlaQ"

        # Authenticate to Twitter
        auth = tweepy.OAuthHandler(api_key,api_secrets)
        auth.set_access_token(access_token,access_secret)

        self.api = tweepy.API(auth)

        try:
            self.api.verify_credentials()
            print('Successful Authentication')
        except:
            print('Failed authentication')


    #   COLLECTS 50 TWEETS USING API
    def collectData(self,username):
        user=self.api.get_user(screen_name=username)
        tweets=self.api.user_timeline(user_id=username,count=50)
        tweets_extended = self.api.user_timeline(user_id=username, tweet_mode='extended', count=50)

        to_extract = [
        'id',
        'full_text',
        ]

        tweets_data = []
        #   EXTRACT ONLY ID AND TEXT FROM TWEET OBJECT
        for tweet in tweets_extended:
            tweet = tweet._json
            tweet_data = {}
            for e in to_extract:
                try:
                    tweet_data[e]=tweet[e]
                except:
                    continue
            tweets_data.append(tweet_data)
        # Get Tweet data
        df = pd.DataFrame(tweets_data)
       
        return (self.jsonify_tweepy(user)["location"],df)

    #   CONVERT OBJECT TO JSON FOR EXTRACTION
    def jsonify_tweepy(self,tweepy_object):
        json_str=json.dumps(tweepy_object._json,indent=2)
        return json.loads(json_str)