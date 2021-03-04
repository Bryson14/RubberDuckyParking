from rest_framework import serializers
from .models import BaseUser, Host, Attendant

class BaseUserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = BaseUser
        fields = ['pk', 'username', 'email', 'first_name', 'last_name']

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
