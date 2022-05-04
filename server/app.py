from flask import Flask


app = Flask(__name__)


@app.route("/")
def hello_world():
    return summary()

def summary():
    cod=model.predict(text)
    concat="<p>"+str(cod[0])+str(cod[1])+"</p>"
    return concat 
