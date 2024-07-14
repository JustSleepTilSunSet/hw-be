from flask import Blueprint, jsonify,request
from http import HTTPStatus
import json
userRouter = Blueprint('users', __name__)
from model.database.initdb import createSession;
from model.database.repository.UsersRepository import User
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity,decode_token
from datetime import timedelta

@userRouter.route("/")
def hello_world():
    return "hola user"

@userRouter.route('/register', methods=['POST'])
def register(): 
    resp = request.json
    try:
        print(json.dumps(resp))
        # connectInitDatabase();
        session = createSession()
        new_user =User(hwpwd = resp["hwpwd"], hwname = resp["hwname"], hwmail = resp["hwmail"]);
        session.add(new_user)
        session.commit()

        return jsonify({'status': HTTPStatus.OK, 'message': 'register success'})
    except Exception as e:
        print(str(e))
        return jsonify({'status': HTTPStatus.INTERNAL_SERVER_ERROR, 'message': 'register failed.'})

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
        return jsonify({'status': HTTPStatus.OK, 'message': 'getUserById success', 'info': user.to_dict()})
    except Exception as e:
        print(str(e))
        return jsonify({'status': HTTPStatus.INTERNAL_SERVER_ERROR, 'message': 'getUserById failed.'})

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
        return jsonify({'status': HTTPStatus.OK, 'message': 'getUsers success', 'info': users_list})
    except Exception as e:
        print(str(e))
        return jsonify({'status': HTTPStatus.INTERNAL_SERVER_ERROR, 'message': 'getUsers failed.'})

@userRouter.route('/updateUserById', methods=['PUT'])
def updateUserById(): 
    try:
        resp = request.json
        print(json.dumps(resp))
        update_fields = {}
        if 'name' in resp:
            update_fields['hwname'] = resp['name']
        if 'email' in resp:
            update_fields['hwemail'] = resp['email']
        if 'password' in resp:
            update_fields['hwpwd'] = resp['password']

        session = createSession()
        print(json.dumps(update_fields))
        updated_rows = session.query(User).filter_by(id=resp["id"]).update(update_fields);
        print(updated_rows);
        session.commit();
        return jsonify({'status': HTTPStatus.OK, 'message': 'updateUserById success'})
    except Exception as e:
        print(str(e))
        return jsonify({'status': HTTPStatus.INTERNAL_SERVER_ERROR, 'message': 'updateUserById failed.'})

@userRouter.route('/deleteUserById', methods=['DELETE'])
def deleteUserById(): 
    try:
        resp = request.json
        print(json.dumps(resp))
        session = createSession()
        updated_rows = session.query(User).filter_by(id=resp["id"]).delete();
        print(updated_rows);
        session.commit();
        return jsonify({'status': HTTPStatus.OK, 'message': 'deleteUserById success'})
    except Exception as e:
        print(str(e))
        return jsonify({'status': HTTPStatus.INTERNAL_SERVER_ERROR, 'message': 'deleteUserById failed.'})

@userRouter.route('/login', methods=['POST'])
def login(): 
    try:
        resp = request.json
        print(json.dumps(resp))
        session = createSession()
        data = (session.query(User).filter_by(hwmail=resp["email"]).first());
        if(resp["pwd"] != data.to_login_format()["pwd"] ):
            return jsonify({'status': HTTPStatus.INTERNAL_SERVER_ERROR, 'message': 'login failed.'})
        expires = timedelta(minutes=10)
        access_token = create_access_token(identity=json.dumps(data.to_token_format()), expires_delta=expires)
        session.commit();
        return jsonify({'status': HTTPStatus.OK, 'message': 'login success',"access_token":access_token})
    except Exception as e:
        print(str(e))
        return jsonify({'status': HTTPStatus.INTERNAL_SERVER_ERROR, 'message': 'login failed.'})
