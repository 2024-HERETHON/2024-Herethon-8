from django.db import models
from django.contrib.auth.models import AbstractUser
from posts.models import Post, Comment , Like, Scrap

# Create your models here.
class User(AbstractUser) :
    email = models.EmailField(max_length=64, unique=True, null=True)
    nickname = models.CharField(max_length=20, unique=True, null=True)
    profile = models.ImageField(upload_to='profiles/', blank=True, null=True)
    point = models.IntegerField(default=0)
    posts = models.ManyToManyField(Post, related_name='user_posts', blank=True)  
    comments = models.ManyToManyField(Comment, related_name='user_comments', blank=True)

    def user_posts(self):
        # 현재 사용자가 작성한 포스트들을 필터링하여 반환합니다.
        return self.posts.filter(writer=self)

    def user_comments(self):
        # 현재 사용자가 작성한 댓글들을 필터링하여 반환합니다.
        return self.comments.filter(writer=self)
    
    def get_liked_posts(self):
        return Post.objects.filter(likes__user=self)

    def get_liked_comments(self):
        return Comment.objects.filter(likes__user=self)
    
    def get_scrap_posts(self):
        return Post.objects.filter(scraps__user=self)


    def __str__(self):
        return self.username
    
class Author(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    introduction = models.TextField()
    info = models.TextField()
    sns = models.CharField(max_length=200)
    posts = models.ManyToManyField(Post, related_name='author_posts', blank=True)  

    def author_posts(self):
        # 현재 저자가 작성한 포스트들을 반환합니다.
        return self.posts.all()

    def __str__(self):
        return self.user.username  # 저자의 사용자 이름을 반환합니다.


