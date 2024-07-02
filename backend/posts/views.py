from django.shortcuts import render, redirect, get_object_or_404
from .models import Post
from .forms import PostModelForm, CommentForm
from django.utils import timezone
# Create your views here.


def post_form_view(request):
    if request.method == "GET":
        form = PostModelForm()
        context = {'form': form}
        return render(request, 'post_form.html', context)
    else:
        form = PostModelForm(request.POST, request.FILES, user=request.user)

        if form.is_valid():
            form.save()
        else:
            context = {'form': form}
            return render(request, 'post_form.html', context)

        return redirect('post-detail',pk=form.instance.pk) 
    
def post_detail_view(request, pk):
    post = get_object_or_404(Post, pk=pk)

    comment_form = CommentForm(request.POST)

    if comment_form.is_valid():
        comment = comment_form.save(commit=False)
        comment.post = post
        comment.writer = request.user
        comment.created_at = timezone.now()
        comment.save()
        return redirect('post-detail', pk=post.pk)

    context = {'post': post, 'comment_form': comment_form,}
    return render(request, 'post_detail.html',context)
