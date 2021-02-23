from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'hosts', views.HostViewSet)
router.register(r'attendants', views.AttendantViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('createProfile/', views.create_profile, name="create"),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
