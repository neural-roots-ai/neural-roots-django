from django.urls import path
from .views import *

urlpatterns = [
    path('contact_us', ClientContactView.as_view(), name='post_client_contact_info_view'),
]
 