from django.shortcuts import render, redirect, get_object_or_404
from .models import Post, Comment, Like
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

    # 댓글 가져오기 - 포스트에 연결된 모든 댓글을 가져오거나 빈 리스트 할당
    comments = post.comments.all() if hasattr(post, 'comments') else []

    context = {
        'post': post,
        'comments': comments,
        'comment_form': comment_form,
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