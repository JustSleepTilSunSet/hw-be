from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from model.database.repository.UserField import id, hwpwd, hwname, hwmail
import os
POSTGRES_URI = os.getenv("POSTGRES_URI")
TABLE_NAME_USER = os.getenv("TABLE_NAME_USER")
Base = declarative_base()

class User(Base):
    __tablename__ = TABLE_NAME_USER
    id = id; # I add the property for query.
    hwpwd = hwpwd;
    hwname = hwname;
    hwmail = hwmail;

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.hwname,
            'email': self.hwmail
        }

    def to_token_format(self):
        return {
            'id': self.id
        }

    def to_login_format(self):
        return {
            'id': self.id,
            'email': self.hwmail,
            'pwd': self.hwpwd
        }