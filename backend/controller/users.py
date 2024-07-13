from flask import Blueprint, jsonify,request
from http import HTTPStatus
import json
userRouter = Blueprint('users', __name__)
from model.database.initdb import createSession;
from model.database.repository.UsersRepository import User

@userRouter.route("/")
def hello_world():
    return "hola user"

@userRouter.route('/register', methods=['POST'])
def register(): 
    resp = request.json
    try:
        print(jsonify(resp))
        # connectInitDatabase();
        session = createSession()
        new_user =User(hwaccount = resp["hwaccount"], hwpwd = resp["hwpwd"], hwname = resp["hwname"], hwmail = resp["hwmail"]);
        session.add(new_user)
        session.commit()

        return jsonify({'status': HTTPStatus.OK, 'message': 'login success'})
    except Exception as e:
        print(str(e))
        return jsonify({'status': HTTPStatus.INTERNAL_SERVER_ERROR, 'message': 'login failed.'})

@userRouter.route('/getUserById', methods=['GET'])
def getUserById(): 
    try:
        # args = request.args;
        id = request.args.get('id')
        print(id)
        session = createSession()
        user = session.query(User).filter_by(id = id).first();
        if(user == None):
            return jsonify({'status': HTTPStatus.INTERNAL_SERVER_ERROR, 'message': 'Unknown user.'})

        json_string = json.dumps(user.to_dict())
        print(json_string)
        return jsonify({'status': HTTPStatus.OK, 'message': 'login success', 'info': user.to_dict()})
    except Exception as e:
        print(str(e))
        return jsonify({'status': HTTPStatus.INTERNAL_SERVER_ERROR, 'message': 'login failed.'})

@userRouter.route('/getUsers', methods=['GET'])
def getUser(): 
    try:
        # args = request.args;
        id = request.args.get('id')
        print(id)
        session = createSession()
        users = session.query(User).all();
        users_list = [user.to_dict() for user in users]
        json_string = json.dumps(users_list)
        print(json_string)
        return jsonify({'status': HTTPStatus.OK, 'message': 'login success', 'info': users_list})
    except Exception as e:
        print(str(e))
        return jsonify({'status': HTTPStatus.INTERNAL_SERVER_ERROR, 'message': 'login failed.'})
