from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import get_user_model
from .models import User, Author


class RegisterForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'password1', 'password2']

class AuthorForm(forms.ModelForm):
    class Meta:
        model = Author
        fields = ['introduction', 'info', 'sns']

class EmailAuthenticationForm(AuthenticationForm):
    email = forms.EmailField(label='Email', required=True)

    class Meta:
        model = User
        fields = ['email', 'password']

