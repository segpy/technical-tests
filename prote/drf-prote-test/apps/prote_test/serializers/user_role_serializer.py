from rest_framework import serializers

from apps.prote_test.models import UserRole


class UserRoleSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserRole
        fields = '__all__'
