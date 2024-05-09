from django.contrib import admin
from .home.models.navbar_model import NavbarItemModel
from .email_automation.models.candidate_data_model import CandidateDataModel
from .email_automation.models.candidate_file_model import CandidateFileModel
from .email_automation.models.file_mapping_model import FileMappingeModel 
from .email_automation.models.file_type_model import FileTypeModel
from .email_automation.models.program_category import ProgramCategoryModel
from .email_automation.models.candidate_country_model import CandidateCountryModel


# Register your models here.
admin.site.register(NavbarItemModel)
admin.site.register(CandidateDataModel)
admin.site.register(CandidateFileModel)
admin.site.register(FileMappingeModel)
admin.site.register(FileTypeModel)
admin.site.register(ProgramCategoryModel)
admin.site.register(CandidateCountryModel)

