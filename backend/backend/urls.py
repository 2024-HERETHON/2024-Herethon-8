"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path , include
from django.conf import settings
from django.conf.urls.static import static

import accounts.views
import posts.views

urlpatterns = [
    path('', accounts.views.beforeMain_view, name='before-main'),
    path('recommend', accounts.views.recommendMain_view, name='recommend-main'),
    path('popular', accounts.views.popularMain_view, name='popular-main'),
    path('admin/', admin.site.urls),
    path('accounts/signup/', accounts.views.signup_view, name="signup"),
    path('accounts/login/', accounts.views.login_view, name="login"),
    path('accounts/logout/', accounts.views.logout_view, name="logout"),
    path('accounts/mypage/', accounts.views.mypage_view, name="mypage"),
    path('accounts/mypage/posts', accounts.views.user_posts_view, name='myPost'),
    path('accounts/mypage/comments', accounts.views.user_comments_view, name='myComment'),
    path('accounts/mypage/hearts', accounts.views.user_liked_posts_view, name='liked_posts'),
    path('accounts/mypage/hearts/comments', accounts.views.user_liked_comments_view, name='liked_comments'),
    path('accounts/mypage/scraps', accounts.views.user_scrap_posts_view, name='scrap_posts'),
    path('accounts/authors/', accounts.views.author_list_view, name='author-list'),
    path('accounts/authors/<int:pk>/', accounts.views.author_detail_view, name='author-detail'),
    path('accounts/authors/create/', accounts.views.author_create_view, name='author-create'),
    path('accounts/authors/mypage/', accounts.views.author_mypage_view, name='author-mypage'), 
    path('posts/', posts.views.post_form_view, name='post-form'),
    path('posts/detail/<int:pk>/', posts.views.post_detail_view, name='post-detail'),
    path('posts/detail/<int:pk>/comment/', posts.views.post_detail_view, name='post-comment'),  
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

