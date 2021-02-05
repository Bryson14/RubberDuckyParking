from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('host', views.host_index, name='host'),
    path('images/hosts/', views.get_image_host, name='image_host'),
    path('images/users/', views.get_image_user, name='image_user'),
    path('images/locations/', views.get_image_loc, name='image_loc')
]