from django.db import models

# Create your models here.
class Posts(models.Model):
    name = models.CharField(max_length=40)
    description = models.CharField(max_length=40)
    message = models.TextField()
    photoUrl = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'send by: {self.name}'
