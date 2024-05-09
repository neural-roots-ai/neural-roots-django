from django.db import models

class FileTypeModel(models.Model):
    
    id = models.BigAutoField(primary_key=True, editable=False, unique=True)
    file_type = models.CharField(max_length=150)
    is_active = models.BooleanField()
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now_add=True)
    class Meta:
        db_table = '"public"."file_type_tbl"' 
        ordering = ['-id']

    def __str__(self) -> str:
        return self.file_type