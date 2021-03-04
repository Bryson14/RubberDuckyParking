from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from . import views


urlpatterns = [
    path('users/<int:pk>/', views.BaseUserDetail.as_view(), name='users-detail'),
    path('users/', views.BaseUserList.as_view(), name='users-list'),
    path('attendants/<int:pk>/', views.AttendantDetail.as_view(), name='attendants-detail'),
    path('attendants/', views.AttendantList.as_view(), name='attendants-list'),
    path('hosts/<int:pk>/', views.HostDetail.as_view(), name='hosts-detail'),
    path('hosts/', views.HostList.as_view(), name='hosts-list'),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
