from django.urls import path, include
from .home.views.navbar_view import NavbarListView

urlpatterns = [
    path("",  include('api.home.urls'), name="home"),
]
