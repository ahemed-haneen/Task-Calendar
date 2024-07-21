from django.db import models

# Create your models here.
class Task(models.Model):
    title = models.TextField(max_length=200)
    color = models.TextField(max_length=10)
    description = models.TextField(max_length=2000)
    startDate = models.DateTimeField()
    endDate = models.DateTimeField()
