from django import forms
from .models import Post, Comment
from django.utils import timezone

class PostModelForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title','image','content']

    def __init__(self, *args, **kwargs):
        self.user = kwargs.pop('user', None) 
        super().__init__(*args, **kwargs)

    def save(self, commit=True):
        instance = super().save(commit=False)
        if not instance.pk:
            instance.writer = self.user
            instance.created_at = timezone.now() 
        if commit:
            instance.save()
        return instance
    
class CommentForm(forms.ModelForm):
    class Meta:
        model =  Comment
        fields = ['content']
