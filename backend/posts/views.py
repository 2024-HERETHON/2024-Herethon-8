from django.shortcuts import render, redirect, get_object_or_404
from .models import Post, Comment, Like ,Scrap
from .forms import PostModelForm, CommentForm
from django.utils import timezone
from django.contrib.auth.decorators import login_required
# Create your views here.


def post_form_view(request):
    if request.method == "GET":
        form = PostModelForm()
        context = {'form': form}
        return render(request, 'writeNew.html', context)
    else:
        form = PostModelForm(request.POST, request.FILES, user=request.user)

        if form.is_valid():
            instance = form.save()  # 저장된 객체(instance) 반환
            return redirect('post-detail', pk=instance.pk)  # 게시물 상세 페이지로 리다이렉트

        else:
            context = {'form': form}
            return render(request, 'writeNew.html', context)

@login_required
def post_detail_view(request, pk):
    post = get_object_or_404(Post, pk=pk)

    if request.method == "POST":
        if request.path.endswith('/like/'):
            if post.likes.filter(user=request.user).exists():
                post.likes.filter(user=request.user).delete()
            else:
                Like.objects.create(user=request.user, post=post)
            return redirect('post-detail', pk=pk)
        elif request.path.endswith('/scrap/'):
            if Scrap.objects.filter(user=request.user, post=post).exists():
                Scrap.objects.filter(user=request.user, post=post).delete()
            else:
                Scrap.objects.create(user=request.user, post=post)
            return redirect('post-detail', pk=pk)
        elif request.path.endswith('/comment/'):
            comment_form = CommentForm(request.POST)
            if comment_form.is_valid():
                comment = comment_form.save(commit=False)
                comment.post = post
                comment.writer = request.user
                comment.created_at = timezone.now()
                comment.save()
                return redirect('post-detail', pk=post.pk)
        
    else:
        comment_form = CommentForm()

    comments = post.comments.all()

    context = {
        'post': post,
        'comments': comments,
        'comment_form': comment_form,
    }
    return render(request, 'contentdetail.html', context)

@login_required
def post_detail_comment_like_view(request, pk):
    comment = get_object_or_404(Comment, pk=pk)

    if request.method == "POST":
        if comment.likes.filter(user=request.user).exists():
            comment.likes.filter(user=request.user).delete()
        else:
            Like.objects.create(user=request.user, comment=comment)

    return redirect('post-detail', pk=comment.post.pk)

@login_required
def sort_comments_oldest(request, pk):
    post = get_object_or_404(Post, pk=pk)
    comments = post.comments.order_by('created_at')

    context = {
        'post': post,
        'comments': comments,
        'comment_form': CommentForm(),
    }
    return render(request, 'contentdetail.html', context)

@login_required
def sort_comments_newest(request, pk):
    post = get_object_or_404(Post, pk=pk)
    comments = post.comments.order_by('-created_at')

    context = {
        'post': post,
        'comments': comments,
        'comment_form': CommentForm(),
    }
    return render(request, 'contentdetail.html', context)

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
    return render(request, 'myHeart.html', context)

@login_required
def user_scrap_posts_view(request):
    user_id = request.user.id
    scrap_posts = Post.objects.filter(likes__user_id=user_id)
    context = {
        'scrap_posts': scrap_posts
    }
    return render(request, 'myScrap.html', context)