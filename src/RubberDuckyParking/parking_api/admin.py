from django.contrib import admin

from .models import(
    ParkingSize,
    Location,
    BaseUser,
    Host,
    Attendant,
    Transactions,
    LocationImage,
    ParkingSpot,
    Vehicle
)

admin.site.register(ParkingSize)
admin.site.register(Location)
admin.site.register(Host)
admin.site.register(BaseUser)
admin.site.register(Attendant)
admin.site.register(Transactions)
admin.site.register(LocationImage)
admin.site.register(ParkingSpot)
admin.site.register(Vehicle)
