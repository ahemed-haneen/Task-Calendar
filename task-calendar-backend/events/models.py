from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
User = get_user_model()

class Event(models.Model):
    title = models.CharField(max_length=200)
    color = models.CharField(max_length=10)
    description = models.CharField(max_length=2000)
    startDate = models.DateTimeField()
    endDate = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, default=1, on_delete=models.CASCADE,related_name="events")
