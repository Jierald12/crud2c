from django.db import models

class Item(models.Model):
    first_name = models.CharField(max_length=50)
    middle_name = models.CharField(max_length=50, blank=True, null=True)
    last_name = models.CharField(max_length=50)
    address = models.CharField(max_length=255)
    barangay = models.CharField(max_length=100, blank=True, null=True)
    city_municipality = models.CharField(max_length=100, blank=True, null=True)
    province = models.CharField(max_length=100, blank=True, null=True)
    zipcode = models.CharField(max_length=10, blank=True, null=True)
    email = models.EmailField(default='', unique=False)
    phone = models.CharField(max_length=15)
    date_of_birth = models.DateField(default='2000-01-01')
    place_of_birth = models.CharField(max_length=100)
    sex = models.CharField(max_length=100)
    civil_status = models.CharField(max_length=20, blank=True, null=True)
    height = models.FloatField(blank=True, null=True)
    weight = models.FloatField(blank=True, null=True)
    blood_type = models.CharField(max_length=3, blank=True, null=True)
    gsid_no = models.CharField(max_length=20, blank=True, null=True)
    pagibig_no = models.CharField(max_length=20, blank=True, null=True)  
    philhealth_no = models.CharField(max_length=20, blank=True, null=True)  
    sss_no = models.CharField(max_length=20, blank=True, null=True)  
    tin_no = models.CharField(max_length=20, blank=True, null=True)
    father_first_name = models.CharField(max_length=30, blank=True, null=True)  
    father_middle_name = models.CharField(max_length=30, blank=True, null=True)  
    father_last_name = models.CharField(max_length=30, blank=True, null=True)
    mother_first_name = models.CharField(max_length=30, blank=True, null=True) 
    mother_middle_name = models.CharField(max_length=30, blank=True, null=True)
    mother_last_name = models.CharField(max_length=30, blank=True, null=True)
    mother_maiden_name = models.CharField(max_length=30, blank=True, null=True)
   
    
    def __str__(self):
        return f'{self.first_name} {self.last_name}'