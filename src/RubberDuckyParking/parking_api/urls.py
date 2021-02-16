from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from . import views

urlpatterns = [
    path('', views.invalid_parameters, name='invalid_parameters'),  # invalid request
    path('user/{id}/', views.user, name='user_api'),     # get a user information
    path('host/', views.host, name='host_api'),     # get a host information
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)