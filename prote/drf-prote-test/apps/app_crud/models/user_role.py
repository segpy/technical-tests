from django.db import models

from django.contrib.auth.models import User

# Create your models here.


class UserRole(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=50)

    class Meta:
        db_table = 'user_role'

    def __str__(self):
        return self.role
