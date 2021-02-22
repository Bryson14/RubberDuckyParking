from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from . import views

urlpatterns = [
    path('', views.test, name='invalid_parameters'),  # invalid request
    path('user/{int:id}/', views.user, name='user_api'),     # get a user information
    path('host/', views.host, name='host_api'),     # get a host information
    path('createProfile/', views.create_profile, name="create")
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
