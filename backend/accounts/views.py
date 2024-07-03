# views.py
from django.shortcuts import render, redirect , get_object_or_404, reverse
import requests
from django.conf import settings
from django.contrib.auth import authenticate, login
from django.http import HttpResponseBadRequest
from django.contrib.auth import login, logout
from django.views import View
from .forms import UserCreationForm, AuthenticationForm
from django.contrib import messages
from .models import User,Post,Comment
from django.views import View
from django.shortcuts import render, redirect
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from accounts. forms import RegisterForm
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.admin.views.decorators import staff_member_required
from django.utils.decorators import method_decorator
from django.http import HttpResponseForbidden
from django.db import IntegrityError
from .models import Author
from .forms import AuthorForm
from django.core.exceptions import ObjectDoesNotExist

def signup_view(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            try:
                user = form.save()
                raw_password = form.cleaned_data.get('password1')
                user = authenticate(username=user.username, password=raw_password)
                login(request, user)
                return redirect('/accounts/login/')
            except IntegrityError:
                form.add_error('nickname', 'This nickname is already taken.')
    else:
        form = RegisterForm()
    return render(request, 'sign.html', {'form': form})

def login_view(request):
    if request.method=='POST':
        form=AuthenticationForm(request=request, data=request.POST)
        if form.is_valid():
            username=form.cleaned_data.get('username')
            password=form.cleaned_data.get('password')
            user=authenticate(request=request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('/')
    else:
        form=AuthenticationForm()
        return render(request, 'login.html', {'form':form})
    
def logout_view(request):
    logout(request)
    return redirect('/')

@login_required
def mypage_view(request):
    return render(request, 'mypage.html')

def user_posts_view(request):
    user_id = request.user.id
    user_posts = Post.objects.filter(writer_id=user_id)
    context = {
        'user_posts': user_posts
    }
    return render(request, 'myPost.html', context)

def user_comments_view(request):
    user_id = request.user.id
    user_comments = Comment.objects.filter(writer_id=user_id)
    context = {
        'user_comments': user_comments
    }
    return render(request, 'myComment.html', context)

@login_required
def user_liked_posts_view(request):
    user_id = request.user.id
    liked_posts = Post.objects.filter(likes__user_id=user_id)
    context = {
        'liked_posts': liked_posts
    }
    return render(request, 'myHeart.html', context)

@login_required
def user_liked_comments_view(request):
    user_id = request.user.id
    liked_comments = Comment.objects.filter(likes__user_id=user_id)
    context = {
        'liked_comments': liked_comments
    }
    # AJAX 요청에 대한 응답으로 HTML 템플릿을 렌더링하여 보냄
    return render(request, 'myHeart.html', context)

@login_required
def user_scrap_posts_view(request):
    user_id = request.user.id
    scrap_posts = Post.objects.filter(likes__user_id=user_id)
    context = {
        'scrap_posts': scrap_posts
    }
    return render(request, 'myScrap.html', context)

def author_list_view(request):
    authors = Author.objects.all()
    return render(request, 'author_list.html', {'authors': authors})

def author_detail_view(request, pk):
    author = get_object_or_404(Author, pk=pk)
    author_posts = author.posts.all()
    similar_authors = Author.objects.exclude(pk=pk)[:3]

    return render(request, 'writerpage.html', {'author': author, 'author_posts': author_posts, 'similar_authors': similar_authors})

@staff_member_required
def author_create_view(request):
    if request.method == 'POST':
        form = AuthorForm(request.POST)
        if form.is_valid():
            author = form.save(commit=False)
            author.user = request.user  # 현재 로그인한 관리자를 작가로 설정
            author.save()
            return redirect('author-list')
    else:
        form = AuthorForm()
    return render(request, 'author_form.html', {'form': form})

@login_required
def author_mypage_view(request):
    try:
        author = request.user.author  # 현재 로그인한 사용자의 작가 프로필 가져오기
    except ObjectDoesNotExist:
        # 사용자에게 연결된 작가 프로필이 없는 경우, 작가 프로필을 생성하거나 다른 처리를 수행할 수 있음
        return redirect('author-create')  # 예시: 작가 프로필 생성 페이지로 리다이렉트

    if request.method == 'POST':
        form = AuthorForm(request.POST, instance=author)
        if form.is_valid():
            form.save()
            return redirect('author-mypage')
    else:
        form = AuthorForm(instance=author)
    return render(request, 'author_mypage.html', {'form': form})


