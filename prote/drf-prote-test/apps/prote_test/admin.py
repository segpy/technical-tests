from django.contrib import admin

# Models
from .models.user_role import UserRole


class AuditorAdmin(admin.ModelAdmin):
    def get_list_display(self, request):
        """
        Function to get the list of fields to be displayed in the list view
        """
        fields = map(lambda field: field.name, self.model._meta.fields)
        list_display = tuple(
            filter(
                lambda field: field not in self.readonly_fields,
                fields))
        return list_display


# Register your models here.
admin.site.register(UserRole, AuditorAdmin)
