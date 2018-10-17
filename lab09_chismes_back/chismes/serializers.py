from rest_framework import serializers
from django.contrib.auth.models import User
from . import models


class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    exclude = ['password']

class ChismeSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.Chisme
    exclude = []