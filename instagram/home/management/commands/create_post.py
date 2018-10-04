from django.core.management.base import BaseCommand
from home.models import Post
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
import os

def cls():
    os.system('clear')

class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        while(True):
            print("MENU\n------\n1. Crear usuario\n2. Listar usuarios\n3. Acceder\n4. Salir")
            option = input()
            if option == '1':
                createUser()
            elif option == '2':
                list_users()
            elif option == '3':
                current_user = login()
                if current_user:
                    user_menu(current_user)
            elif option == '4':
                print("Goodbye Lad")
                break
            else:
                pass

def createUser():
    cls()
    nombre = input("Ingrese su nombre: ")
    apellido = input("Ingrese su apellido: ")
    em = input("Ingrese su email: ")
    un = input("Ingrese su username: ")
    co = input("Ingrese su contrasena: ")
    user=User.objects.create_user(first_name=nombre, last_name=apellido, username=un, password=co, email=em)
    user.save()
    cls()

def list_users():
    cls()
    print("Lista de usuarios:")
    for x in User.objects.all():
        print(x)
    input()
    cls()

def login():
    cls()
    us = input("Ingrese su username: ")
    pa = input("Ingrese su contrasena: ")
    user = authenticate(username=us, password=pa)
    if user is not None:
        print("Bienvenido {}!".format(user.first_name))
        return user
    else:
        print("Usuario o contrasena incorrectos")
        return 0
    cls()

def user_menu(user):
    cls()
    while(True):
        print("MENU DE {}\n----------------\n3.1. Crear Post\n3.2. Like de Post\n3.3. Delete Post\n3.4. Menu principal".format(user.first_name))
        option = input()
        if option == '1':
                create_post(user)
        elif option == '2':
                list_users()
        elif option == '3':
            current_user = login()
            if current_user:
                user_menu(current_user)
        elif option == '4':
            print("Goodbye Lad")
        else:
            pass

def create_post(user):
    cls()
    t = input("Ingrese su titulo: ")
    tx = input("Ingrese su texto: ")
    p = Post(title=t, text=tx, created_by=user)
    p.save()
    cls()