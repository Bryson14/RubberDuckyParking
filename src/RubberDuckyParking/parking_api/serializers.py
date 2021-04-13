from rest_framework import serializers
from .models import BaseUser, Host, Attendant, ParkingSpot, ParkingSize, Location, Reservation


class BaseUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = BaseUser
        fields = ['pk', 'username', 'email', 'first_name', 'last_name', 'password']


class BaseUserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = BaseUser
        fields = ['pk', 'username', 'email', 'first_name', 'last_name', 'password']
        read_only_fields = ['password']


class HostSerializer(serializers.ModelSerializer):
    user = BaseUserSerializer()
    class Meta:
        model = Host
        fields = ['pk', 'user']


class AttendantSerializer(serializers.ModelSerializer):
    user = BaseUserSerializer()
    class Meta:
        model = Attendant
        fields = ['pk', 'user']


class ParkingSizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ParkingSize
        fields = ['pk','name', 'description', 'min_width', 'min_length']



class LocationSerializer(serializers.ModelSerializer):
    host = HostSerializer()
    class Meta:
        model = Location
        fields = ['pk','name', 'description', 'address', 'city', 'zip_code', 'state', 'host']


class ParkingSpotSerializer(serializers.ModelSerializer):
    parking_size = ParkingSizeSerializer(read_only=True)
    location = LocationSerializer(read_only=True)
    owner = HostSerializer(read_only=True)
    class Meta:
        model = ParkingSpot
        fields = ['pk', 'uid', 'parking_size', 'price', 'location', 'notes', 'actual_width', 'actual_length', 'owner']


class ParkingSpotCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ParkingSpot
        fields = '__all__'


class ReservationSerializer(serializers.ModelSerializer):
    parking_spot = ParkingSpotSerializer(read_only=True)
    user = BaseUserSerializer(read_only=True)

    class Meta:
        model = Reservation
        fields = ['pk', 'parking_spot', 'start_date', 'end_date', 'user', 'canceled', 'confirmed']


class ReservationCreateSerialzier(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = '__all__'

