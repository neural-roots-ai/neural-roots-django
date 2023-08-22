from rest_framework.views import APIView
from rest_framework.response import Response
from ..models.navbar_model import NavbarItemModel
from ..serializers.navbar_serializer import NavbarItemSerializer

class NavbarListView(APIView):
    def get(self, request):
        navbar_item_list = NavbarItemModel.objects.all()
        navbar_item_serializer = NavbarItemSerializer(navbar_item_list, many=True)
        return Response(navbar_item_serializer.data)
    