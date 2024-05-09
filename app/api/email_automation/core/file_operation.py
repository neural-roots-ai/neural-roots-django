from ..models.candidate_file_model import CandidateFileModel


class FileOperation:
    def __init__(self) -> None:
        pass

    def add_csv_file(self, program_category, file_type, file_name, country):
        CandidateFileModel(
            file_status=0,
            file_name=file_name,
            is_active=True,
            category=program_category,
            country=country,
            file_type=file_type
        ).save()
