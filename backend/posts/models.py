from django.db import models
from django.conf import settings


class Post(models.Model):
    MOVIE = 'MO'
    BOOK = 'BO'
    MUSIC = 'MU'
    ECONOMY = 'EC'
    SCIENCE = 'SC'
    SOCIETY = 'SO'
    FREEDOM = 'FR'

    CATEGORY_CHOICES = [
        (MOVIE, '영화'),
        (BOOK, '도서'),
        (MUSIC, '음악'),
        (ECONOMY, '경제'),
        (SCIENCE, '과학'),
        (SOCIETY, '사회'),
        (FREEDOM, '자유'),
    ]

    title = models.CharField('제목', max_length=200)
    writer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, verbose_name='작성자', null=True, blank=True)
    image = models.ImageField(null=True, blank=True, upload_to="post_photo")
    content = models.TextField('내용')
    category = models.CharField('글 분야', max_length=2, choices=CATEGORY_CHOICES, default='자유')
    created_at = models.DateTimeField(auto_now_add=True)
    comment = models.ForeignKey('Comment', on_delete=models.CASCADE, related_name='comments', verbose_name='댓글', null=True, blank=True)
    

    def __str__(self):
        return self.title
    
    def like_count(self):
        return self.likes.count()
    
    def scrap_count(self):
        return self.scraps.count()

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments', verbose_name='게시글', null=True, blank=True)
    content = models.TextField(verbose_name='내용')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='작성일')
    writer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, verbose_name='작성자', null=True)

    def like_count(self):
        return self.likes.count()
    
    

class Like(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='likes', null=True, blank=True)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE, related_name='likes', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'post', 'comment')

class Scrap(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='scraps')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'post')