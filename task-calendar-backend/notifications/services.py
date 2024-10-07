from django.contrib.contenttypes.models import ContentType
from .models import Notification

def create_notification(user,message,related_object=None):
    notification = Notification(recipient=user,message=message)
    if related_object:
        notification.content_type = ContentType.objects.get_for_model(related_object)
        notification.object_id = related_object.id
    notification.save()
    return notification