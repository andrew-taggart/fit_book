from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager


class UserProfile(models.Model):
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=200)
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=100, blank=True)
    last_name = models.CharField(max_length=100, blank=True)
    is_pro = models.BooleanField(default=False)
    profession = models.ForeignKey('Profession', on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.username


class Profession(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self):
        return self.title
    

class Service(models.Model):
    professional = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='services')
    title = models.CharField(max_length=50)
    description = models.TextField()
    duration = models.DurationField()
    price = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return self.title


class Appointment(models.Model):
    client = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='client_appointments')
    professional = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='professional_appointments')
    service = models.ForeignKey(Service, on_delete=models.CASCADE)
    date_time = models.DateTimeField()
    status = models.CharField(max_length=100, choices=[('scheduled', 'Scheduled'), ('completed', 'Completed'), ('canceled', 'Canceled')])

    def __str__(self):
        return f"{self.service.title} on {self.date_time}"
    

class Review(models.Model):
    client = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='review_written')
    professional = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='review_received')
    rating = models.IntegerField(
        validators=[
            MinValueValidator(1),
            MaxValueValidator(5)
        ]
    )
    comment = models.TextField()

    def __str__(self):
        return f"Review by {self.client.username} for {self.professional.username}"