from django import urls
from django.urls.conf import path
from posts.views import PostsViewSet, UserViewSet

urlpatterns = [
    path('posts/', PostsViewSet.as_view({'get':'list', 'post':'create'})),
    path('user/', UserViewSet.as_view({'get':'list', 'post':'create'})),
]