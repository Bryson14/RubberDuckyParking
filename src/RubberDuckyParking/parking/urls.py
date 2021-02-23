from django.urls import path
from . import views


urlpatterns = [
    path('', views.Index.as_view(), name='index'),
    path('about/', views.AboutUs.as_view(), name='about'),
    path('tools/', views.LotTools.as_view(), name='lot_tools'),
    path('host/', views.host_detail, name='host_detail'),
    path('host/', views.host_index, name='host'),
    path('attendant/', views.attendant_detail, name="attendant_details"),
    path('search/', views.search, name='search'),
    path('reservation/<str:res_id>/', views.reservation, name="reservation"),
    path('myprofile/', views.my_profile, name='user'),
    path('signup/', views.sign_up, name='signup'),
    # path('images/hosts/', views.get_image_host, name='image_host'),
    # path('images/users/', views.get_image_user, name='image_user'),
    # path('images/locations/', views.get_image_loc, name='image_loc'),
    # path('login', views.login, name="login")
]