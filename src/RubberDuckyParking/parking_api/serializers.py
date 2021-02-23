from rest_framework import serializers
from .models import BaseUser, Host, Attendant

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = BaseUser
        fields = ['pk', 'username', 'email', 'first_name', 'last_name']

class HostSerializer(serializers.HyperlinkedModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Host
        fields = ['pk', 'user']

class AttendantSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = BaseUser
        fields = ['pk', 'user']
