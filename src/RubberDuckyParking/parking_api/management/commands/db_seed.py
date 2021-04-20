from django.core.management.base import BaseCommand, CommandError
from django.utils import timezone
from django.db import transaction
from ...models import (
    BaseUser, 
    ParkingSize,
    Host, 
    Attendant, 
    Vehicle, 
    Location, 
    ParkingSpot, 
    LocationImage
)

class Command(BaseCommand):
    help = 'Seeds the database with helpful starter data'

    @transaction.atomic # this decorator means that if anything fails, it won't save any of your progress to the db, preventing bad data
    def handle(self, *args, **options):
        print('creating dummy models')
        
        standard_spot = ParkingSize.objects.create(
            name="A standard size parking spot",
            description= "This is a standard parking spot size",
            min_width= 19.0,
            min_length= 118.0
        )

        motorcycle_spot = ParkingSize(
            name="Motorcycle Size",
            description="A small parking spot perfect for motorcycles and mopeds.",
            min_width=4.0,
            min_length=9.0)
        motorcycle_spot.save()

        compact_size = ParkingSize(
            name="Compact Size",
            description="A compact parking spot for smaller sized cars",
            min_width=8.0,
            min_length=16)
        compact_size.save()

        large_size = ParkingSize(
            name="Extra length Size",
            description="A longer parking spot that is the equivalent of 2 standard spots stacked end to end",
            min_width=9.0,
            min_length=36.0)
        large_size.save()
        
        tailgate_size = ParkingSize(
            name="Tailgate Size",
            description="The best spot for a tailgaters paradise. Has all the space for grills, RVs and chairs.",
            min_width=15.0,
            min_length=36.0)
        tailgate_size.save()

        user1 = BaseUser(
            first_name="Tony",
            last_name="Stark",
            username="ironman",
            phone_number="+1(801) 123-4567",
            email="tony@test.com"
        )
        user1.set_password('loveyou3000')
        user1.save()
        print('creating a base user')

        user2 = BaseUser(
            first_name="Micheal",
            last_name="Scott",
            username="michealscott",
            phone_number="+1(801) 739-7894",
            email="scott@test.com"
        )
        user2.set_password('hosttime333')
        user2.save()
        print('creating one more base user')

        host_user = BaseUser(
            first_name="Harrison",
            last_name="Host",
            username="hostharry",
            phone_number="+1(801) 789-7894",
            email="harryhost@test.com"
        )
        host_user.set_password('secrethost444')
        host_user.save()

        host = Host(
            user=host_user
        )
        host.save()
        print('creating a host')

        attendant_user = BaseUser(
            first_name="Alice",
            last_name="Attendant",
            username="aliceattendant",
            phone_number="+1(801) 888-7894",
            email="aliceattendant@test.com"
        )
        attendant_user.set_password('secretattendant444')
        attendant_user.save()

        attendant1 = Attendant(
            user = attendant_user,
            boss = host
        )
        attendant1.save()
        print('creating an attendant for host')

        vehicle1 = Vehicle(
            year=2021,
            make="Ford",
            model="Bronco Wildtrack",
            color="Blue",
            license="6mc e78",
            description="Thor's Car",
            user=user2
        )
        vehicle1.save()

        location1 = Location(
            name="My bakery parking lot",
            description="This is my not so busy bakery that has a big parking lot",
            address="1454 Malibu Way",
            city="Malibu",
            zip_code="90210",
            state="CA",
            host=host,
        )
        location1.save()

        parking_spot_1 = ParkingSpot(
            uid=1,
            parking_size=compact_size,
            actual_width=8.5,
            actual_length=15.3,
            price=12.0,
            location=location1,
            notes="this is a hell of a spot!",
            owner=host
        )
        parking_spot_1.save()