# -*- coding: utf-8 -*-
from rest_framework import viewsets
from . import models, serializers

class ChismeModelViewSet(viewsets.ModelViewSet):
  queryset = models.Chisme.objects.all()
  serializer_class = serializers.ChismeSerializer