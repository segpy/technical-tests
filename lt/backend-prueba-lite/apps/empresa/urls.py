from django.contrib import admin
from django.urls import path, include
from .views import EmpresaViewSet, ArticuloViewSet, ArticleByEmpresaViewSet
from rest_framework import routers


# Create a router and register our viewsets with it.
router = routers.DefaultRouter()
router.register('empresa', EmpresaViewSet)
router.register('articulo', ArticuloViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('articulo/empresa/<int:id>', ArticleByEmpresaViewSet.as_view({'get': 'list'})),
]