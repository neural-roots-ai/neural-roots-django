from rest_framework.serializers import ModelSerializer
from .models.contact_us_model import ContactUsModel

class ContactUsSerializer(ModelSerializer):
    class Meta:
        model = ContactUsModel
        fields = '__all__'


