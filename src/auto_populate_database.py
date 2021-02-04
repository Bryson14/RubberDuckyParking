# Generated by Django 3.1.5 on 2021-01-29 01:21

"""
After running:
$ python manage.py makemigrations parking
$ python manage.py sqlmigrate parking 0001
$ python manage.py migrate

$ run python manage.py makemigration --empty parking --name populate

This will make a file called 0002_populate.py in src/RubberDuckyParking/parking/migrations

Replace the contents of 0002_populate.py with this file.

Then run:

$ python manage.py makemigrations
$ python manage.py migrate

You now have prepopulated data for the app.

Now to create a superuser to access /admin

$ python manage.py createsuperuser

If the following error occurs:
"
Superuser creation skipped due to not running in a TTY. You can run `manage.py createsuperuser` in your project to create one manually.
"
This is a windows specific problem, so run:

$ winpty python manage.py createsuperuser

Enter a username, email, and password. (They don't have to be real at this point)

After, to start the server, run:

$ python manage.py runserver
"""
from django.db import migrations
from django.utils import timezone


def populate_db(apps, schema_editor):
    # getting links to the tables
    parking_table = apps.get_model('parking', 'ParkingTable')
    user_table = apps.get_model('parking', 'User')
    host_table = apps.get_model('parking', 'Host')
    location_table = apps.get_model('parking', 'Location')
    transaction_table = apps.get_model('parking', 'Transactions')
    image_table = apps.get_model('parking', 'Image')

    standard_spot = parking_table(
        name="Standard Spot",
        description="A standard parking spot that you'd find at a grocery store or mall.",
        min_width=9.0,
        min_length=18.0)
    standard_spot.save()
    motorcycle_spot = parking_table(
        name="Motorcycle Spot",
        description="A small parking spot perfect for motorcycles and mopeds.",
        min_width=4.0,
        min_length=9.0)
    motorcycle_spot.save()
    compact_spot = parking_table(
        name="Compact Spot",
        description="A compact parking spot for smaller sized cars",
        min_width=8.0,
        min_length=16)
    compact_spot.save()
    large_spot = parking_table(
        name="Extra length Spot",
        description="A longer parking spot that is the equivalent of 2 standard spots stacked end to end",
        min_width=9.0,
        min_length=36.0)
    large_spot.save()
    tailgate_spot = parking_table(
        name="Tailgate Spot",
        description="The best spot for a tailgaters paradise. Has all the space for grills, RVs and chairs.",
        min_width=15.0,
        min_length=36.0)
    tailgate_spot.save()
    user1 = user_table(
        first_name="Tony",
        last_name="Startk",
        username="TheRealIronMan",
        date_joined=timezone.now(),
        phone_number="+1(801) 123-4567",
        email="tstark@avengers.com"
    )
    user1.save()
    user2 = user_table(
        first_name="Thor",
        last_name="Odinson",
        username="GodofThunder",
        date_joined=timezone.now(),
        phone_number="+1(801) 789-7894",
        email="lightning@avengers.com"
    )
    user2.save()

    host1 = host_table(
        first_name="Nick",
        last_name="Fury",
        date_joined=timezone.now(),
        phone_number="+1(801) 555-1212",
        email="youdonttrackme@ItrackYou.com"
    )
    host1.save()
    host2 = host_table(
        first_name="Agent",
        last_name="Coulsen",
        date_joined=timezone.now(),
        phone_number="+1(385) 987-6543",
        email="mrserious@shield.com"
    )
    host2.save()


class Migration(migrations.Migration):

    dependencies = [
        ('parking', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(populate_db),
    ]
