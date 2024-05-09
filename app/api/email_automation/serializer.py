from rest_framework.serializers import ModelSerializer
from .models.file_mapping_model import FileMappingeModel
from .models.candidate_data_model import CandidateDataModel
from .models.candidate_country_model import CandidateCountryModel
from .models.program_category import ProgramCategoryModel
from .models.file_type_model import FileTypeModel
from .models.candidate_file_model import CandidateFileModel

class FileMappingeSerializer(ModelSerializer):
    class Meta:
        model = FileMappingeModel
        fields = '__all__'

class CandidateDataSerializer(ModelSerializer):
    class Meta:
        model = CandidateDataModel
        fields = '__all__'

class CandidateCountrySerializer(ModelSerializer):
    class Meta:
        model = CandidateCountryModel
        fields = '__all__'

class ProgramCategorySerializer(ModelSerializer):
    class Meta:
        model = ProgramCategoryModel
        fields = '__all__'

class FileTypeSerializer(ModelSerializer):
    class Meta:
        model = FileTypeModel
        fields = '__all__'

class CandidateFileSerializer(ModelSerializer):
    class Meta:
        model = CandidateFileModel
        fields = '__all__'


