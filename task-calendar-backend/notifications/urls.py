from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import NotificationListView

router = DefaultRouter()
router.register(r'', NotificationListView, basename='notification')

urlpatterns = [
    path("", include(router.urls))
]