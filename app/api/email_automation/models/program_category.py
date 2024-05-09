from django.db import models


class ProgramCategoryModel(models.Model):
    
    id = models.BigAutoField(primary_key=True, editable=False, unique=True)
    category = models.CharField(max_length=150)
    is_active = models.BooleanField()
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now_add=True)
    class Meta:
        db_table = '"public"."program_category_tbl"' 
        ordering = ['-id']

    def __str__(self) -> str:
        return self.category

