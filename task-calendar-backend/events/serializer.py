from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Event

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email"]

class EventSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    class Meta:
        model = Event
        fields = ['id', 'title', 'color', 'description', 'startDate', 'endDate','author']
        extra_kwargs = {
            'description': {'required': False}
        }
    
    def validate(self, data):
        if data['startDate'] >= data['endDate']:
            raise serializers.ValidationError("Event end date should be greater than start date")
        return data