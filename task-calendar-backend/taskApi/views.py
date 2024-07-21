from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from . serializer import * 
from rest_framework.response import Response

# Create your views here.

class TaskView(APIView):
    def get(self, request):
        output = [{
            'title': output.title,
            'color': output.color,
            'description': output.description,
            'startDate': output.startDate,
            'endDate': output.endDate,
        } for output in Task.objects.all()]
        return Response(output)
    
    def post(self, request):
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)