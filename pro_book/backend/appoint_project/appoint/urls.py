from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.UserProfileList.as_view(), name='userprofile-list'),
    path('users/<int:pk>/', views.UserProfileDetail.as_view(), name='userprofile-detail'),
    path('professions/', views.ProfessionList.as_view(), name='profession-list'),
    path('professions/<int:pk>/', views.ProfessionDetail.as_view(), name='profession-detail'),
    path('services/', views.ServiceList.as_view(), name='service-list'),
    path('services/<int:pk>/', views.ServiceDetail.as_view(), name='service-detail'),
    path('appointments/', views.AppointmentList.as_view(), name='appointment-list'),
    path('appointments/<int:pk>/', views.AppointmentDetail.as_view(), name='appointment-detail'),
    path('reviews/', views.ReviewList.as_view(), name='review-list'),
    path('reviews/<int:pk>/', views.ReviewDetail.as_view(), name='review-detail'),
]