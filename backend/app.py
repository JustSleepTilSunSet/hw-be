from flask import Flask
import os
FRONTEND_URI = os.getenv("FRONTEND_URI")
from flask_cors import CORS
from controller.users import userRouter
from model.database.initdb import connectInitDatabase
app = Flask(__name__)
connectInitDatabase();
CORS(app, origins=[FRONTEND_URI])
app.register_blueprint(userRouter, url_prefix='/users')
@app.route("/")
def hello_world():
    return "healthpage"

if __name__ == '__main__':
    app.run(port=10000)
    # app.run(debug=True)// To cancel debug mode for external to connect the service.