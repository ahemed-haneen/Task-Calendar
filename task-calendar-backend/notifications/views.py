from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Notification
from .serializers import NotificationSerializer
# Create your views here.

class NotificationListView(viewsets.ReadOnlyModelViewSet):
    serializer_class = NotificationSerializer

    def get_queryset(self):
        return Notification.objects.filter(recipient=self.request.user)
    
    @action(detail=True,methods=['POST'])
    def mark_as_read(self,request,pk=None):
        notification = self.get_object()
        notification.is_read = True
        notification.save()
        return Response({'status': 'notification marked as read'})
    
    @action(detail=True,methods=['POST'])
    def mark_all_as_read(self,request):
        self.get_queryset().update(is_read=True)
        return Response({'status': 'all notifications marked as read'})

