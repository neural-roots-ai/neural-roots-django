from django.contrib import admin
from .home.models.navbar_model import NavbarItemModel
from .training_internship.models.contact_us_model import ContactUsModel


admin.site.register(NavbarItemModel)
admin.site.register(ContactUsModel)
# Register your models here.
