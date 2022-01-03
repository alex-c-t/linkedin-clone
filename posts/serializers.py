from rest_framework import serializers
from .models import Posts
from django.contrib.auth import get_user_model

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = "__all__"

class UserSerializer(serializers.ModelSerializer):
    # password = serializers.p
    class Meta:
        model = get_user_model()
        fields = ["id","first_name","username", "password"]


from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)

        # Add extra responses here
        data['username'] = self.user.username
        data['username'] = self.user.username
        data['displayName'] = self.user.first_name
        data['uid'] = self.user.id
        return data

