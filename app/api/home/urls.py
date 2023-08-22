from django.urls import path
from .views.navbar_view import NavbarListView

urlpatterns = [
    path("", NavbarListView.as_view(), name='navbar'),
]
