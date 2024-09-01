from rest_framework.views import APIView
from .models import Task
from .serializer import TaskSerializer
from rest_framework.response import Response

# Create your views here.

class TaskView(APIView):
    def get(self, request,format=None):
        queryset = Task.objects.all()
        serializer = TaskSerializer(queryset, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)