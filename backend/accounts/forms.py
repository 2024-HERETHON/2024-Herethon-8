from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from .models import User, Author

class RegisterForm(UserCreationForm):
    class Meta:
        model=User
        fields=['username', 'email', 'nickname','profile']

class AuthorForm(forms.ModelForm):
    class Meta:
        model = Author
        fields = ['introduction', 'info', 'sns']

