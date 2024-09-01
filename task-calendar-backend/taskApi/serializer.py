from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Task

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email"]

class TaskSerializer(serializers.ModelSerializer):
    author = UserSerializer()
    class Meta:
        model = Task
        fields = ['id', 'title', 'color', 'description', 'startDate', 'endDate', 'author']