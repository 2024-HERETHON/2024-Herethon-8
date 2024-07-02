from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser) :
    email = models.EmailField(max_length=64, unique=True)
    nickname = models.CharField(max_length=20, unique=True)
    profile = models.ImageField(upload_to='profiles/', blank=True, null=True)
    point = models.IntegerField(default=0)
    
class Author(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    introduction = models.TextField()
    info = models.TextField()
    sns = models.CharField(max_length=200)


