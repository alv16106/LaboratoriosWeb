from django.core.management.base import BaseCommand
from home.models import Post, PostUserLike
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
import os

def cls():
    os.system('clear')

class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        cls()
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
            like_post(user)
        elif option == '3':
            delete(user)
        elif option == '4':
            cls()
            break
        else:
            pass

def like_post(us):
    cls()
    posts = Post.objects.all()
    if posts:
        for post in posts:
            print("pk={} {} \n {} \n by: {}".format(post.id, post.title, post.text, post.created_by))
        print("\nPor favor ingrese el numero del post al que quiere dar like:")
        pid = input()
        if not pid:
            input("No ha ingresado nada, regresando al menu")
        else:
            like = PostUserLike(user = us, post = posts[int(pid) - 1])
            like.save()
    else:
        input("No existe ningun post")
    cls()

def delete(user):
    posts = Post.objects.filter(created_by=user)
    if posts:
        for post in posts:
            print("pk={} {} \n {} \n by: {}".format(post.id, post.title, post.text, post.created_by))
        print("\nPor favor ingrese el numero del post que quiere borrar")
        pid = input()
        post = Post.objects.get(pk=int(pid))
        seguro = input("borrando {} pk={}. Y/N: ".format(post.title, post.id))
        if seguro == "y" or seguro == "Y":
            post.delete()
        else:
            print("Cancelando...")
    else:
        input("No ha hecho ningun post")
    cls()
    

def create_post(user):
    cls()
    t = input("Ingrese su titulo: ")
    tx = input("Ingrese su texto: ")
    p = Post(title=t, text=tx, created_by=user)
    p.save()
    cls()