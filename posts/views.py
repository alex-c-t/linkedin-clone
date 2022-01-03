from django.shortcuts import render
from django.contrib.auth import get_user_model, hashers
from rest_framework import viewsets
from rest_framework_simplejwt.views import TokenObtainPairView
from posts.serializers import PostSerializer, UserSerializer, MyTokenObtainPairSerializer
from posts.models import Posts


class PostsViewSet(viewsets.ModelViewSet):
    # permission_classes = []
    queryset = Posts.objects.all().order_by('-id')
    serializer_class = PostSerializer

class UserViewSet(viewsets.ModelViewSet):
    # permission_classes = []
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer

    def perform_create(self, serializer):
        serializer.save(password= hashers.make_password(self.request.data['password']))

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer