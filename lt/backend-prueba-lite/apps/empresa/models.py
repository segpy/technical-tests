from django.db import models

# Create your models here.

class Empresa(models.Model):
    nit = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=100)
    direccion = models.CharField(max_length=100)
    telefono = models.IntegerField(max_length=10)

    def __str__(self):
        return f'{self.nit} - {self.nombre}'


class Articulo(models.Model):
    id = models.IntegerField(primary_key=True, auto_created=True, blank=True)
    nombre = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=100)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.id} - {self.nombre} - {self.empresa}'



