This is a Django app that utilizes the Django REST Framework (DRF) to create a RESTful API.

Requirements
------------

-   Python (3.6 or later)
-   Django (3.0 or later)
-   Django REST Framework (3.11 or later)

Installation
------------

1.  Install the package using pip:



```
pip install django-rest-framework-app
```


1.  Add the app to your INSTALLED_APPS in your Django project's settings.py file:


```
INSTALLED_APPS = [
    ...,
    'rest_framework',
    'django_rest_framework_app',
]
```

1.  Add the app's URLs to your project's urls.py file:


```
from django.urls import path, include

urlpatterns = [
    ...,
    path('api/', include('django_rest_framework_app.urls')),
]
```


Usage
-----

The app's views and serializers can be found in the `django_rest_framework_app.views` and `django_rest_framework_app.serializers` modules, respectively. You can customize these as needed for your project.

API Endpoints
-------------

-   `/empresa/`: CRUD operations for empresa.
-   `/articulo/`: CRUD operations for empresa.
-   `/login/`: Login system for users.
-   `/swagger/`: Endpoints detailed documentation

Authentication
--------------

The API uses Token-based authentication provided by DRF. You can create a token by calling the `/api-token-auth/` endpoint with a valid username and password.

Permissions
-----------

The API uses DRF's built-in permissions classes, such as `IsAuthenticated` and `IsAdminUser`, to control access to endpoints. You can customize these as needed for your project.
