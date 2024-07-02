from django.urls import path
from .views import post_form_view, post_detail_view

app_name='posts'

urlpatterns=[
    path('', post_form_view, name='post-form'),
    path('detail/<int:pk>/', post_detail_view, name='post-detail'),
    path('detail/<int:pk>/comment/', post_detail_view, name='post-comment'), 

]