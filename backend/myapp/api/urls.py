from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('login/',LoginView.as_view(),name="login"),
    path('signup/',SignupView.as_view(),name="signup"),
    # path('home/',HomeView.as_view(),name="home"),
]
