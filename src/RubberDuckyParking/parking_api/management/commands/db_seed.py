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
            description= "yee haw",
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
            last_name="Startk",
            username="TheRealIronMan",
            password="hasAHeart1",
            phone_number="+1(801) 123-4567",
            email="tstark@avengers.com"
        )
        user1.save()

        user2 = BaseUser(
            first_name="Thor",
            last_name="Odinson",
            username="GodofThunder",
            password='secretThunder',
            phone_number="+1(801) 789-7894",
            email="lightning@avengers.com"
        )
        user2.save()

        host_user = BaseUser(
            first_name="Host",
            last_name="User",
            username="hostuser",
            password='secretHost',
            phone_number="+1(801) 589-7894",
            email="host@avengers.com"
        )
        host_user.save()

        host = Host(
            user=host_user
        )
        host.save()

        attendant_user = BaseUser(
            first_name="Attendant",
            last_name="User",
            username="attendantuser",
            password='secretAttendant',
            phone_number="+1(801) 888-7894",
            email="attendant@avengers.com"
        )
        attendant_user.save()

        attendant1 = Attendant(
            user = attendant_user
        )
        attendant1.save()

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
        vehicle2 = Vehicle(
            year=2011,
            make="Audi",
            model="R8",
            color="Silver",
            license="ImFeMan",
            description="Stark's",
            user=user1
        )
        vehicle2.save()

        location1 = Location(
            name="my Front yard",
            description="just park right on my front yard, i don't care.",
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
            notes="Seeded spot"
        )
        parking_spot_1.save()