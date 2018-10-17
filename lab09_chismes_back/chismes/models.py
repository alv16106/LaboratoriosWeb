from django.db import models

# Create your models here.
class Chisme(models.Model):
  title= models.CharField(max_length= 50)
  content= models.CharField(max_length= 255)
  date= models.DateTimeField(auto_now_add=True)