from rest_framework import serializers
from .models import UserProfile, Profession, Service, Appointment, Review

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'is_pro', 'profession']

class ProfessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profession
        fields = ['id', 'title', 'description']

class Serviceserializers(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['id', 'professional', 'title', 'description', 'duration', 'price']

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ['id', 'client', 'professional', 'service', 'date_time', 'status']

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'client', 'professional', 'rating', 'comment']