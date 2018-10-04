from django.db import models
from django.contrib.auth.models import User


class Post(models.Model):
    title = models.CharField(max_length=200)
    text = models.CharField(max_length=200)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='post_creators')
    likes = models.ManyToManyField(User, through='PostUserLike')

class PostUserLike(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE )
    post = models.ForeignKey(Post, on_delete=models.CASCADE )
    creation_datetime = models.DateTimeField(auto_now = True)