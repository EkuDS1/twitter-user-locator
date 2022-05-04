import twint

class API:

    def __init__(self):
        #   CONFIGURATION FOR API
        self.c = twint.Config()   
        self.c.Store_csv = True
        self.c.Output = "output.csv"   #   PATH TO OUTPUT FILE
        self.c.limit = '100'         #   LIMIT TWEETS TO 100 IN INCREMENTS OF 20
        self.c.Count = True          #   COUNT NUMBER OF TWEETS STORED
        self.c.Hide_output = True    #   HIDE OUTPUT IN TERMINAL
        self.c.Custom["tweet"] = ["id", "username","tweet","geo","source","near","place"]


    def setUsername(self,username):
        self.c.Username='PTIOfficial'   #   USERNAME TO RETRIEVE TWEETS 

    def search(self):
        twint.run.Search(self.c)    # COMMENCE SEARCH


