import twint


class API:

    def __init__(self):
        #   CONFIGURATION FOR API
        self.c = twint.Config()   
        self.c.Store_csv = True
        self.c.Output = "none.csv"   #   PATH TO OUTPUT FILE
        self.c.limit = '100'         #   LIMIT TWEETS TO 100 IN INCREMENTS OF 20
        self.c.Count = True          #   COUNT NUMBER OF TWEETS STORED
        self.c.Hide_output = True    #   HIDE OUTPUT IN TERMINAL
        

    def setUsername(self,username):
        self.c.username=username

    def search(self):
        twint.run.Search(self.c)

    
    