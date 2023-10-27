from flask import Flask
from flask_cors import CORS
from parsel import Selector
import requests
from stateSelector import randomState

app = Flask(__name__)
CORS(app)
RandState = randomState()

URL = "https://zillow56.p.rapidapi.com/search"
querystring = {f"location":"{RandState}"}

headers = {
	"X-RapidAPI-Key": "hnzxmUF3dRmshMUZVWLs35lzU1n4p1NDiYmjsnZyaF9BYZQdSU",
	"X-RapidAPI-Host": "zillow56.p.rapidapi.com"
}


@app.route("/")
def hello_world():
    response = requests.get(URL, headers=headers, params=querystring)
    print(RandState)
    return response.json()
    


@app.route('/hello')
def hello():
    return {
        'Name':"geek", 
        "Age":"22",
        "Date":"x", 
        "programming":"python"
        }

if __name__ == '__main__':
    app.run(debug=True)