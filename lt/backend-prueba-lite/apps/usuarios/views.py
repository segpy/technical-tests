from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.models import User
from .serializer import UserSerializer
from rest_framework import viewsets, status
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password

# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # Allow for only admin users
    # permission_classes = [IsAdminUser]

    def create(self, request, *args, **kwargs):
        some_salt = 'mMUj0DrIK6vgtdIYepkIxN'
        password = make_password(request.data['password'] , some_salt)
        newData = {
            "username":request.data['username'],
            "password":password,
        }
        serializer = UserSerializer(data=newData)
        if serializer.is_valid():
            print('Serializer is valid')
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)
