from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('host/<str:host_id>/', views.host_detail, name='host_detail'),
    path('host/', views.host_index, name='host'),
    path('tools/', views.lot_tools, name='lot_tools'),
    path('attendant/<str:attendant_id>/', views.attendant_detail, name="attendant_details"),
    path('reservation/<str:res_id>/', views.reservation, name="reservation"),
    path('user/<str:user_id>/', views.user_detail, name='user_detail'),
    # path('images/hosts/', views.get_image_host, name='image_host'),
    # path('images/users/', views.get_image_user, name='image_user'),
    # path('images/locations/', views.get_image_loc, name='image_loc'),
    # path('login', views.login, name="login")
]