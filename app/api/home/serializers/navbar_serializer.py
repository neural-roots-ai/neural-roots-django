from rest_framework.serializers import ModelSerializer
from ..models.navbar_model import NavbarItemModel

class NavbarItemSerializer(ModelSerializer):
    class Meta:
        model = NavbarItemModel
        fields = '__all__'