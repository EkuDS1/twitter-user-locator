import twint

class TwitterAPI:

    def __init__(self):
        #   CONFIGURATION FOR API
        self.c = twint.Config()   
        self.c.Store_csv = True
        self.c.Output = "output.csv"   #   PATH TO OUTPUT FILE
        self.c.limit = '100'         #   LIMIT TWEETS TO 100 IN INCREMENTS OF 20
        self.c.Count = True          #   COUNT NUMBER OF TWEETS STORED
        self.c.Hide_output = True    #   HIDE OUTPUT IN TERMINAL
        self.c.location = True       #   GET TRUE LOCATION TO COMPARE
        # self.c.Geo = "48.880048,2.385939,1km"
        self.c.Custom["tweet"] = ["id", "username","tweet","geo","source","near","place"]


    def setUsername(self,username):
        self.c.Username="nakedskincareaz"   #   USERNAME TO RETRIEVE TWEETS 

    def search(self):
        self.c.Search="covid"
        twint.run.Search(self.c)    # COMMENCE SEARCH


if __name__=="__main__":
    Ta=TwitterAPI()
    # Ta.setUsername("")
    Ta.search()

