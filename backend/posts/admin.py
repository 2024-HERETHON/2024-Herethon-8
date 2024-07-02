from django.contrib import admin
from .models import Post, Comment

# Register your models here.
class CommentInLine(admin.TabularInline):
    model = Comment
    extra = 5
    min_num = 3
    max_num = 5
    verbose_name = '댓글'
    verbose_name_plural = '댓글들'

@admin.register(Post)
class PostModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'content', 'created_at','writer']
    inlines = [CommentInLine]

