from django.db import models

class ContactUsModel(models.Model):
    
    first_name = models.CharField(max_length=300)
    last_name = models.CharField(max_length=300)
    is_active = models.BooleanField()
    university = models.CharField(max_length=300)
    is_degree_completed = models.BooleanField()
    email = models.EmailField(unique=True)
    current_company = models.CharField(max_length=300, blank=True)
    country =  models.CharField(max_length=300)
    current_role = models.CharField(max_length=300, blank=True)
    work_experience = models.CharField(max_length=300, blank=True)
    country_code = models.CharField(max_length=5)
    contact_no = models.CharField(max_length=20, help_text='Enter phone number')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    query = models.TextField(blank=True)
    class Meta:
        db_table = 'contact_us'
        ordering = ['-updated_at']

    def __str__(self) -> str:
        return self.email 