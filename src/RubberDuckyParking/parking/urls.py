from django.urls import path
from . import views


urlpatterns = [
    path('', views.Index.as_view(), name='index'),
    path('about/', views.AboutUs.as_view(), name='about'),
    path('tools/', views.LotTools.as_view(), name='lot_tools'),
    path('search/', views.search, name='search'),
    path('reservation/<str:res_id>/', views.reservation, name="reservation"),
    path('myprofile/', views.my_profile, name='user'),
    path('signup/', views.sign_up, name='signup'),
]