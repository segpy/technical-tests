# Create your views here.

from django.shortcuts import render
from django.http import HttpResponse
from .models import Empresa, Articulo
from .serializers import EmpresaSerializer, ArticuloSerializer
from rest_framework import viewsets


class EmpresaViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Empresa.objects.all()
    serializer_class = EmpresaSerializer

class ArticuloViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Articulo.objects.all()
    serializer_class = ArticuloSerializer

    def create(self, request, *args, **kwargs):
        # print(dir(request.user), "...........................................")
        # validate if the user is admin
        return super().create(request, *args, **kwargs)

        user = request.user
        if user.is_superuser:
            return super().create(request, *args, **kwargs)
        else:
            return HttpResponse("No tienes permisos para crear un articulo")

class ArticleByEmpresaViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Articulo.objects.all()
    serializer_class = ArticuloSerializer
    # Allow for only admin users
    # permission_classes = [IsAdminUser]

    def get_queryset(self):
        queryset = Articulo.objects.filter(empresa=self.kwargs['id'])
        return queryset


            
