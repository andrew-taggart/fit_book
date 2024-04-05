from django.core.management.base import BaseCommand
from faker import Faker
import random 
from appoint.models import UserProfile, Profession, Review, Service, Appointment
from datetime import timedelta

class Command(BaseCommand):
    help = 'Seed database with random data'

    def handle(self, *args, **kwargs):
        fake = Faker()

#Create Professions
        for _ in range(3):
            Profession.objects.create(
                title = fake.job(),
                description = fake.text()
            )
        
        professions = Profession.objects.all()

#Create UserProfile
        for _ in range(10):
            profile = UserProfile.objects.create(
                username = fake.user_name(),
                email = fake.email(),
                first_name = fake.first_name(),
                last_name = fake.last_name(),
                is_pro = random.choice([True, False]), 
                profession = random.choice(professions),
                password = 'password'
            )

        users = UserProfile.objects.filter(is_pro=True)

#Create Services
        for user in users:
            for _ in range(3):
                Service.objects.create(
                    professional=user,
                    title=fake.bs(),
                    description=fake.text(),
                    duration=timedelta(hours=random.randint(1,3)),
                    price=random.uniform(10.0, 500.0)
                )

        services = Service.objects.all()

#Create Appointment and Reviews
        client_users = list(UserProfile.objects.filter(is_pro=False))
        for service in services:
            for _ in range(1):
                client = random.choice(client_users)
                appointment = Appointment.objects.create(
                    client = client,
                    professional = service.professional,
                    service = service,
                    date_time=fake.future_datetime(end_date="+30d"),
                    status = random.choice(['scheduled', 'completed', 'canceled'])
                )

                Review.objects.create(
                    client = client,
                    professional = service.professional,
                    rating = random.randint(1, 5),
                    comment = fake.text()
                )

                self.stdout.write(self.style.SUCCESS("Populated Fake Data"))