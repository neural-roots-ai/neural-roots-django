from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView
#from upload.views import image_upload

urlpatterns = [
    #path("", image_upload, name="upload"),
    path("", TemplateView.as_view(template_name='index.html'), name='index'), # React static file
    #path("",  include('home.urls'), name="home"),
    #path("api/",  include('api.urls'), name="api"),
    path("api/authentication/",  include('api.authentication.urls'), name="api"),
    path("api/email-automation/",  include('api.email_automation.urls'), name="email_automation"),
    path("admin/", admin.site.urls),
]

if bool(settings.DEBUG):
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)