from django.urls import path,include
from .views import EventListView, EventDetailsView

urlpatterns = [
    path("", EventListView.as_view(),name='event_list'),
    path("<int:pk>/",EventDetailsView.as_view(),name='event_detail')
]