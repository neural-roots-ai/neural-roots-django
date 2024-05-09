import pandas as pd
from urllib.request import urlopen
from ..models.file_mapping_model import FileMappingeModel
from ..models.candidate_data_model import CandidateDataModel
from ..models.candidate_file_model import CandidateFileModel


class CsvFileParser:
    def __init__(self) -> None:
        pass

    def read_csv(self, data_url) -> pd.DataFrame:
        response = urlopen(data_url)
        data = response.file
        df = pd.read_csv(data)
        return df
    
    def csv_data_insertion(self, file_name, df:pd.DataFrame):
        if not df.empty:
            candidate_file_model = CandidateFileModel.objects.get(pk=file_name)
            file_mapping_list = FileMappingeModel.objects.filter(is_active=True).values()
            file_mapping_dict = {file_mapping['desc']: file_mapping['title'] 
                                 for file_mapping in file_mapping_list }
            for row in df.iterrows():
                candidate_data_model = CandidateDataModel(
                    file_id=candidate_file_model,
                    email=row[1][file_mapping_dict['email']],
                    first_name=row[1][file_mapping_dict['first_name']],
                    last_name=row[1][file_mapping_dict['last_name']],
                    country=candidate_file_model.country,
                    phone_no=row[1][file_mapping_dict['phone_no']],
                    source=row[1][file_mapping_dict['source']],
                    email_status=0,
                    is_active=True,
                    will_pay=True if row[1][file_mapping_dict['will_pay']]=="Yes" else False,
                    payment=False,
                    category=candidate_file_model.category,
                    linded_in_profile=row[1][file_mapping_dict['linked_in_link']],
                    skills=row[1][file_mapping_dict['skills']],
                    university=row[1][file_mapping_dict['university']],
                    degree=row[1][file_mapping_dict['degree']],
                    job=row[1][file_mapping_dict['job']],
                    cv_link=row[1][file_mapping_dict['cv_link']],
                    work_experience=row[1][file_mapping_dict['work_experience']]
                    
                )
                candidate_data_model.save()