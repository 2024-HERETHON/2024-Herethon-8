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
from .models import User,Post,Comment,Like
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
from .forms import EmailAuthenticationForm
from django.db.models import Count


def beforeMain_view(request):
    latest_post = Post.objects.order_by('-created_at').first()
    most_liked_post = Post.objects.annotate(like_count=Count('likes')).order_by('-like_count').first()
    focus_author = Author.objects.all()[:2]
    recommended_post = Post.objects.order_by('-comments')[:2]

    context = {
        'latest_post': latest_post,
        'most_liked_post': most_liked_post,
        'focus_author': focus_author,
        'recommended_post': recommended_post,
    }

    if request.user.is_authenticated:
        return render(request, 'afterMain.html', context)
    else:
        return render(request, 'beforeMain.html', context)
    
def recommendMain_view(request):
    focus_author = Author.objects.all()[:4]
    latest_post = Post.objects.order_by('-created_at')[:6]
    recommended_post = Post.objects.all()[:6]
    context = {
        'focus_author': focus_author,
        'latest_post' : latest_post,
        'recommended_post': recommended_post,
    }
    return render(request, 'recommend.html', context)

def popularMain_view(request):
    most_liked_post = Post.objects.annotate(like_count=Count('likes')).order_by('-like_count')
    context = {
        'most_liked_post' : most_liked_post
    }
    return render(request, 'popular.html', context)

def signup_view(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
                user=form.save(commit=False)
                user.email = None
                user = form.save()
                user = authenticate(username=form.cleaned_data['username'],
                                    password=form.cleaned_data['password1'])
                login(request, user)
                return redirect('/accounts/login/')
            
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
def user_liked_view(request):
    user_id = request.user.id
    liked_posts = Post.objects.filter(likes__user_id=user_id)
    liked_comments = Comment.objects.filter(comment__user_id=user_id)
    context = {
        'liked_posts': liked_posts,
        'liked_comments': liked_comments
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
    scrap_posts = Post.objects.filter(scraps__user_id=user_id)
    context = {
        'scrap_posts': scrap_posts
    }
    return render(request, 'myScrap.html', context)

def author_list_view(request):
    authors = Author.objects.all()
    return render(request, 'author_list.html', {'authors': authors})

def author_detail_view(request, pk):
    author = get_object_or_404(Author, pk=pk)
    author_posts = Post.objects.filter(writer=author.user)
    similar_authors = Author.objects.exclude(pk=pk)[:2]

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


