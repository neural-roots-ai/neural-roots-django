from django.db import models

class CandidateCountryModel(models.Model):
    
    country_id = models.BigAutoField(primary_key=True, editable=False, unique=True)
    is_active = models.BooleanField()
    country = models.CharField(max_length=100, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now_add=True)
    class Meta:
        db_table = '"public"."candidate_country_tbl"' 
        ordering = ['-createdAt']

    def __str__(self) -> str:
        return self.country