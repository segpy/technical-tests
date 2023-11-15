from rest_framework import routers
# from apps.prote_test.views import views
from apps.prote_test.views import (SendMailView, FiboApiView)

from django.urls import path, include

router = routers.DefaultRouter()
# router.register(r'users', views.UserViewSet)
# router.register(r'groups', views.GroupViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/',
         include('rest_framework.urls',
                 namespace='rest_framework')),
    path('fibo/send/', SendMailView.as_view()),
    path('fibo/get/', FiboApiView.as_view())
]
