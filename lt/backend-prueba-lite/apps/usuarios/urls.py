from django.contrib import admin
from django.urls import path, include
from .views import UserViewSet
from rest_framework import routers


# Create a router and register our viewsets with it.
routers = routers.DefaultRouter()
# Create user
routers.register('users', UserViewSet)  # /users/<id>: Get user by id
                                        # /users: Get all users
                                        # /users: Create user
                                        # /users/<id>: Update user by id
                                        # /users/<id>: Delete user by id


urlpatterns = [
    path('', include(routers.urls)),
]