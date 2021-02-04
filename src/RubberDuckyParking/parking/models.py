from django.db import models
# TODO write code to auto populate with test data some of the databases


class ParkingTable(models.Model):
    """
    Helps characterize the different sizes of parking spots. One to One relationship with Location.
    """
    name = models.CharField(max_length=20)              # i.e standard, or small rv, or compact, or large bus
    description = models.CharField(max_length=100)       # standard parking lot found at most places
    min_width = models.FloatField()                   # stored in ft, i.e. "9" means nine feet long
    min_length = models.FloatField()                  # stored in ft, i.e. "18" means eighteen feet long

    class Meta:
        verbose_name = "Parking Space Size"
        verbose_name_plural = "Parking Space Sizes"

    def __str__(self):
        return f"{self.name}: {round(self.min_length, 1)}ft x {round(self.min_width, 1)}ft"


class User(models.Model):
    """
    The buyer agent of this system. They rent parking spots and receive confirmation
    """
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=30)
    username = models.CharField(max_length=40)
    date_joined = models.DateField('Date Joined')
    phone_number = models.CharField(max_length=20)  # example "+1 (801) 123-4567"
    email = models.EmailField(max_length=254)
    # profile_picture = models.ImageField(upload_to="users/pictures/") TODO maybe add this profile picture

    def __str__(self):
        return f"USER: {self.first_name} {self.last_name}"

# TODO might merge user and host tables to minimize complexity
class Host(models.Model):
    """
    The seller agent of this system. They provide parking spots and manage them.
    """
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=30)
    date_joined = models.DateField('Date Joined')
    phone_number = models.CharField(max_length=20)  # example "+1 (801) 123-4567"
    email = models.EmailField(max_length=254)
    # profile_picture = models.ImageField(upload_to="host/pictures/") TODO maybe add this profile picture

    def __str__(self):
        return f"HOST: {self.first_name} {self.last_name}"


class Attendant(models.Model):
    ...


class Vehicle(models.Model):
    """
    For keeping track of owners car, confirming the transaction, and verifying that a parked car should/shouldn't be there
    """
    ...


class Location(models.Model):
    """
    A Host can host (have) multiple locations
    """
    name = models.CharField(max_length=100)             # i.e. "My right driveway"
    description = models.CharField(max_length=500)      # i.e. "the right side of a two car wide driveway
    address = models.CharField(max_length=50)
    city = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=10, default="20500")          # i.e. 84093-3541
    state = models.CharField(max_length=3)
    parking_size = models.ForeignKey(ParkingTable, on_delete=models.CASCADE, default=1,  verbose_name="Parking Size")     # TODO maybe change the on delete behavior
    actual_width = models.FloatField(default=9.0)
    actual_length = models.FloatField(default=18.0)
    qty = models.IntegerField(default=1)         # i.e. this location has 3 standard sized parking spots available.
    host_id = models.ForeignKey(Host, default=1, on_delete=models.CASCADE)     # Host can have many parking locations

    class Meta:
        verbose_name_plural = "Parking Spots"

    def __str__(self):
        return f"{self.name} at {self.address}"


class Transactions(models.Model):
    """
    Record the individual rents that happen
    """
    date = models.DateTimeField()
    amount_charged_to_user = models.DecimalField(max_digits=8, decimal_places=2)
    fee_amount = models.DecimalField(max_digits=8, decimal_places=2)
    amount_to_host = models.DecimalField(max_digits=8, decimal_places=2)
    host_id = models.ForeignKey("Host", default=1, on_delete=models.CASCADE)
    user_id = models.ForeignKey("User", default=1, on_delete=models.CASCADE)
    location_id = models.ForeignKey("Location", default=1, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "Transactions"

    def __str__(self):
        return f"{self.amount_charged_to_user}$ at {self.date} -- USER: {self.user_id} -- HOST: {self.host_id}"


class Image(models.Model):
    """
    Used to save multiple pictures of the parking spaces, etc.
    https://stackoverflow.com/questions/40218080/how-to-add-multiple-images-to-the-django
    """
    location = models.ForeignKey(Location, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="location/pictures/")

    class Meta:
        verbose_name_plural = "Images"

    def __str__(self):
        return f"Image of {self.location}"

