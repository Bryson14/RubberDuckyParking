from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from . import views
from rest_framework.views import APIView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'users', views.BaseUserViewSet, basename='user')
router.register(r'attendants', views.AttendantViewSet, basename='attendant')
router.register(r'hosts', views.HostViewSet, basename='host')
router.register(r'parking-spots', views.ParkingSpotViewSet, basename='parking-spot')
urlpatterns = router.urls + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
