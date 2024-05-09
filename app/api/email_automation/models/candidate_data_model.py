from django.db import models
from .candidate_file_model import CandidateFileModel


class CandidateDataModel(models.Model):
    user_id = models.BigAutoField(primary_key=True, editable=False, unique=True)
    file_id = models.ForeignKey(CandidateFileModel, on_delete=models.CASCADE)
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=150, null=True, blank=True)
    last_name = models.CharField(max_length=150, null=True, blank=True)
    country = models.CharField(max_length=150)
    phone_no = models.CharField(max_length=150, null=True, blank=True)
    source = models.CharField(max_length=150)
    email_status = models.IntegerField()
    is_active = models.BooleanField()
    will_pay = models.BooleanField()
    payment = models.BooleanField(null=True, blank=True)
    category = models.CharField(max_length=150, null=True, blank=True)
    linded_in_profile = models.CharField(max_length=500, null=True, blank=True)
    skills = models.CharField(max_length=500, null=True, blank=True)
    university = models.CharField(max_length=300, null=True, blank=True)
    degree = models.CharField(max_length=150, null=True, blank=True)
    job = models.CharField(max_length=500, null=True, blank=True)
    cv_link = models.CharField(max_length=500, null=True, blank=True)
    work_experience = models.IntegerField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = '"public"."candidate_master_data_tbl"'
        #db_table_comment = "Candidate master table from all source"
        ordering = ['-createdAt']

    def __str__(self) -> str:
        return self.email