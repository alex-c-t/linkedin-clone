from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import permission_classes

from posts.serializers import PostSerializer
from posts.models import Posts


class PostsViewSet(viewsets.ModelViewSet):
    # permission_classes = []
    queryset = Posts.objects.all().order_by("id")
    serializer_class = PostSerializer
