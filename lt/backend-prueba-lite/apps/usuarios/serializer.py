from rest_framework import serializers
from django.contrib.auth.models import User

# Obtain user model
from django.contrib.auth import get_user_model

class UserSerializer(serializers.ModelSerializer):
    """
    Serializador de la clase Articulo
    """
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'first_name', 'last_name']