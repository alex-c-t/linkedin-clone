from django import urls
from django.urls.conf import path
from posts.views import PostsViewSet

urlpatterns = [
    path('posts/', PostsViewSet.as_view({'get':'list', 'post':'create'}))
]