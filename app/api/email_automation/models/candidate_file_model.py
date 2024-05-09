from django.db import models

class CandidateFileModel(models.Model):
    
    file_id = models.BigAutoField(primary_key=True, editable=False, unique=True)
    file_status = models.IntegerField(default=0)
    file_name = models.CharField(max_length=300)
    is_active = models.BooleanField()
    category = models.CharField(max_length=100, null=True, blank=True)
    country = models.CharField(max_length=100, null=True, blank=True)
    file_type = models.IntegerField()
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now_add=True)
    class Meta:
        db_table = '"public"."candidate_file_tbl"' 
        ordering = ['-createdAt']

    def __str__(self) -> str:
        return self.file_name