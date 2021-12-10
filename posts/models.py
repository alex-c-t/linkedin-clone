from django.db import models

# Create your models here.
class Posts:
    name = models.CharField(max_length=40)
    description = models.CharField(max_length=40)
    message = models.TextField()
    photoUrl = models.CharField(max_length=40)
    created_at = models.DateTimeField(auto_now_add=True)
