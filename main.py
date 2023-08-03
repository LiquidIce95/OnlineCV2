from flask import Flask,request,jsonify,render_template
from matplotlib import pyplot as plt
import mpld3


app = Flask(__name__)

@app.route("/")
def index():

    return render_template("index.html")

if __name__=="__main__":
    app.run(host='0.0.0.0',port=5002)