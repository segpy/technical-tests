from rest_framework import serializers
from apps.empresa.models import Empresa
from apps.empresa.models import Articulo
from django.contrib.auth.models import User


class EmpresaSerializer(serializers.ModelSerializer):
    """
    Serializador de la clase Empresa
    """
    class Meta:
        model = Empresa
        fields = '__all__'
        

class ArticuloSerializer(serializers.ModelSerializer):
    """
    Serializador de la clase Articulo
    """
    class Meta:
        model = Articulo
        fields = '__all__'