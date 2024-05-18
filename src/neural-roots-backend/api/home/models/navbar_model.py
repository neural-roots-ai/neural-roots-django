from django.db import models

class NavbarItemModel(models.Model):
    nav_id = models.BigAutoField(primary_key=True, editable=False, unique=True)
    nav_name = models.CharField(max_length=20)
    is_active = models.BinaryField(max_length=1)

    def __str__(self) -> str:
        return self.nav_name