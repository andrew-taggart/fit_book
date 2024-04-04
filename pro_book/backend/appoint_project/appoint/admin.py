from django.contrib import admin
from .models import UserProfile, Service, Appointment, Review


admin.site.register(UserProfile)
admin.site.register(Service)
admin.site.register(Appointment)
admin.site.register(Review)