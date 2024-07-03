from django import forms
from .models import Post, Comment, Scrap
from django.utils import timezone

class PostModelForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'writer', 'content', 'image', 'category']  # 사용자가 입력할 필드들
        

    def __init__(self, *args, **kwargs):
        self.user = kwargs.pop('user', None)
        super().__init__(*args, **kwargs)
        

    def save(self, commit=True):
        instance = super(PostModelForm, self).save(commit=False)
        if self.user:
            instance.writer = self.user
        if commit:
            instance.save()
            self.save_m2m()
        return instance
    
class CommentForm(forms.ModelForm):
    class Meta:
        model =  Comment
        fields = ['content']

class LikePostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = []

class LikeCommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = []

class ScrapForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = []