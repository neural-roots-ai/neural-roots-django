from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework import status
from .serializer import *
from .models.contact_us_model import ContactUsModel

class ClientContactView(APIView):
    def post(self, request, *args, **kwargs):
        '''
        Create the Todo with given todo data
        '''
        data = {
                'first_name': request.data.get('first_name'), 
                'completed': request.data.get('last_name'),
                'is_active': request.data['is_active'],
                'universiy':request.data['universiy'], 
                'is_degree_completed': request.data['is_degree_completed'], 
                'email':request.data['email'], 
                'current_company':request.data['current_company'], 
                'country':request.data['country'], 
                'current_role':request.data['current_role'], 
                'work_experience':request.data['work_experience'], 
                'country_code':request.data['country_code'], 
                'contact_no':request.data['contact_no'], 
                'query':request.data['query']
        }
        serializer = ContactUsSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({'status':'sucess'}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


     
        
#######################################
@api_view(["POST"])
def post_client_contact_info_view(request):
    print(request.method, request.data)
    ContactUsModel(
        first_name = request.data['first_name'],
        last_name = request.data['last_name'],
        is_active = request.data['is_active'],
        universiy = request.data['university'], 
        is_degree_completed = request.data['is_degree_completed'], 
        email = request.data['email'], 
        current_company = request.data['current_company'], 
        country = request.data['country'], 
        current_role = request.data['current_role'], 
        work_experience = request.data['work_experience'], 
        country_code = request.data['country_code'], 
        contact_no = request.data['contact_no'], 
        query = request.data['query']
    )
    return Response({
            "status": "success"
        })

