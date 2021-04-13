# Generated by Django 3.1.5 on 2021-04-13 01:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('parking_api', '0004_reservation_created_at'),
    ]

    operations = [
        migrations.AddField(
            model_name='reservation',
            name='canceled',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='reservation',
            name='confirmed',
            field=models.BooleanField(default=False),
        ),
    ]
