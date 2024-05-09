from django.db import models

class FileMappingeModel(models.Model):
    
    id = models.BigAutoField(primary_key=True, editable=False, unique=True)
    title = models.CharField(max_length=150)
    desc = models.CharField(max_length=300)
    file_type_id = models.IntegerField()
    is_active = models.BooleanField(max_length=1)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now_add=True)
    class Meta:
        db_table = '"public"."candidate_mapping_tbl"' 
        ordering = ['-id']

    def __str__(self) -> str:
        return self.title