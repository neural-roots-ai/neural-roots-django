from rest_framework.response import Response
from rest_framework import status, generics
from rest_framework.decorators import api_view
from .core.csv_file_parser import CsvFileParser
from .core.file_operation import FileOperation
from .models.candidate_data_model import CandidateDataModel
from .models.candidate_country_model import CandidateCountryModel
from .serializer import *


@api_view(["POST"])
def upload_csv_file_and_data(request):
    data_url=request['data_url']
    file_name=request["file_name"]
    file_type=request["file_type"]
    country=request["country"]
    program=request["program"] 
    file_operation_obj = FileOperation()
    file_operation_obj.add_csv_file(program_category=program, 
                                    file_type=file_type, 
                                    file_name=file_name, 
                                    country=country)
    csv_file_parser_obj = CsvFileParser()
    df = csv_file_parser_obj.read_csv(data_url)
    csv_file_parser_obj.csv_data_insertion(file_name, df)
    return Response({
            "status": "success",
            "file_id": "",
            "total": "",
            "notes": ""
        })


@api_view(["GET"])
def get_client_data_list(request):
    file_id=request["file_id"]
    country=request["country"]
    program=request["program"]
    will_pay=request["will_pay"] 
    email_status=request["status"]

    candidate_data = CandidateDataModel.objects.filter(file_id=file_id,
                                                        country=country,
                                                        category=program,
                                                        will_pay=will_pay,
                                                        email_status=email_status)
    
    serializer = CandidateDataSerializer(candidate_data, many=True)
    if serializer.is_valid():
        return Response({
                "status": "success",
                "total":candidate_data.count(),
                "data": serializer.data
            }, status=status.HTTP_201_CREATED)
    return Response({"status": "fail", "message": serializer.errors},
                     status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET"])
def get_candidate_file_list(request):
    candidate_file_list = CandidateFileModel.objects.filter(is_active=True).order_by('-createdAt')
    serializer = CandidateFileSerializer(candidate_file_list, many=True)
    return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(["GET"])
def get_program_list(request):
    program_category_list = ProgramCategoryModel.objects.filter(is_active=True).order_by('-createdAt')
    serializer = ProgramCategorySerializer(program_category_list, many=True)
    return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(["GET"])
def get_file_type_list(request):
    file_type_list = FileTypeModel.objects.filter(is_active=True).order_by('-createdAt')
    serializer = FileTypeSerializer(file_type_list, many=True)
    return Response(serializer.data, status=status.HTTP_201_CREATED)


# class EmailDataView(generics.GenericAPIView):
#     serializer_class = CsvDataSerializer
#     queryset = CsvDataModel.objects.all()

#     def get(self, request):
#         file_id = int(request.GET.get("file_id", 1))
#         csv_data = CsvDataModel.objects.get(pk=file_id)
#         search_param = request.GET.get("search")
#         total_csv_data = csv_data.count()
#         if search_param:
#             csv_data = csv_data.filter(title__icontains=search_param)
#         serializer = self.serializer_class(csv_data, many=True)
#         return Response({
#             "status": "success",
#             "file_id": file_id,
#             "total": total_csv_data,
#             "notes": serializer.data
#         })

#     def post(self, request):
#         serializer = self.serializer_class(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({"status": "success", "data": {"note": serializer.data}}, status=status.HTTP_201_CREATED)
#         else:
#             return Response({"status": "fail", "message": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


# class NoteDetail(generics.GenericAPIView):
#     queryset = NoteModel.objects.all()
#     serializer_class = NoteSerializer

#     def get_note(self, pk):
#         try:
#             return NoteModel.objects.get(pk=pk)
#         except:
#             return None

#     def get(self, request, pk):
#         note = self.get_note(pk=pk)
#         if note == None:
#             return Response({"status": "fail", "message": f"Note with Id: {pk} not found"}, status=status.HTTP_404_NOT_FOUND)

#         serializer = self.serializer_class(note)
#         return Response({"status": "success", "data": {"note": serializer.data}})

#     def patch(self, request, pk):
#         note = self.get_note(pk)
#         if note == None:
#             return Response({"status": "fail", "message": f"Note with Id: {pk} not found"}, status=status.HTTP_404_NOT_FOUND)

#         serializer = self.serializer_class(
#             note, data=request.data, partial=True)
#         if serializer.is_valid():
#             serializer.validated_data['updatedAt'] = datetime.now()
#             serializer.save()
#             return Response({"status": "success", "data": {"note": serializer.data}})
#         return Response({"status": "fail", "message": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

#     def delete(self, request, pk):
#         note = self.get_note(pk)
#         if note == None:
#             return Response({"status": "fail", "message": f"Note with Id: {pk} not found"}, status=status.HTTP_404_NOT_FOUND)

#         note.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)

