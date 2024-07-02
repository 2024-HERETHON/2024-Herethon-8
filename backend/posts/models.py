from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    title = models.CharField('제목', max_length=200)
    writer = models.ForeignKey(to=User, on_delete=models.CASCADE, verbose_name='작성자', null=True, blank=True)
    image = models.ImageField('이미지',null=True, blank=True)
    content = models.TextField('내용')
    created_at = models.DateTimeField('작성일')
    #liked
    #scrapped

    def __str__(self):
        return self.title

class Comment(models.Model):
    post = models.ForeignKey(to=Post, on_delete=models.CASCADE, related_name='comments',verbose_name='게시글',null=True, blank=True)
    content=models.TextField(verbose_name='내용')
    created_at=models.DateTimeField(verbose_name='작성일')
    writer=models.ForeignKey(to=User, on_delete=models.CASCADE, verbose_name='작성자', null = True)