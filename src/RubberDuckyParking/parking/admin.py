from django.contrib import admin

from .models import ParkingTable, Location, User, Host, Transactions, Image

admin.site.register(ParkingTable)
admin.site.register(Location)
admin.site.register(User)
admin.site.register(Host)
admin.site.register(Transactions)
admin.site.register(Image)