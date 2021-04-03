from rest_framework import serializers
from .models import BaseUser, Host, Attendant, ParkingSpot, ParkingSize, Location

class BaseUserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = BaseUser
        fields = ['pk', 'username', 'email', 'first_name', 'last_name', 'password']

class HostSerializer(serializers.HyperlinkedModelSerializer):
    user = BaseUserSerializer()
    class Meta:
        model = Host
        fields = ['pk', 'user']

class AttendantSerializer(serializers.HyperlinkedModelSerializer):
    user = BaseUserSerializer()
    class Meta:
        model = Attendant
        fields = ['pk', 'user']


class ParkingSizeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ParkingSize
        fields = ['pk','name', 'description', 'min_width', 'min_length']


class LocationSerializer(serializers.HyperlinkedModelSerializer):
    host = HostSerializer()
    class Meta:
        model = Location
        fields = ['pk','name', 'description', 'address', 'city', 'zip_code', 'state', 'host']


class ParkingSpotSerializer(serializers.HyperlinkedModelSerializer):
    parking_size = ParkingSizeSerializer()
    location = LocationSerializer()
    class Meta:
        model = ParkingSpot
        fields = ['pk', 'uid', 'parking_size', 'price', 'location', 'notes', 'actual_width', 'actual_length']
