from django.urls import path, include
from .views import *

urlpatterns = [
    #path('upload_csv/', , name='upload_csv'),
    path('test_view/', upload_csv_file_and_data, name='test_view'),
    path('get-client-data-list/', get_client_data_list, name='get_client_data'),
    path('get-candidate-file-list/', get_candidate_file_list, name='get_candidate_file'),
    path('get-program-list/', get_program_list, name='get_program_list'),
    path('get-file-type-list/', get_file_type_list, name='get_file_type_list'),
]
 