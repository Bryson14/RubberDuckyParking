from django.shortcuts import render, get_object_or_404, redirect
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from .models import BaseUser, Attendant, Host, ParkingSpot, Location
from .serializers import BaseUserSerializer, AttendantSerializer, HostSerializer, ParkingSizeSerializer, ParkingSpotSerializer
from .permissions import AuthenticatedPermission, HostPermission
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action


class BaseUserViewSet(viewsets.ViewSet):
    
    def list(self, request):
        queryset = BaseUser.objects.all()
        serializer = BaseUserSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = BaseUser.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = BaseUserSerializer(user)
        return Response(serializer.data)

    def post(self, request, pk=None, *args, **kwargs):
        instance = BaseUser.objects.get(pk=pk)
        serializer = BaseUserSerializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    @action(detail=False, permission_classes=[])   
    def me(self, request):
        if request.user.is_authenticated:
            serializer = BaseUserSerializer(request.user)

            return Response(serializer.data)
        else:
            return Response({"error": "not found"}, status=404)


class AttendantViewSet(viewsets.ViewSet):

    def list(self, request):
        queryset = Attendant.objects.all()
        serializer = AttendantSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Attendant.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = AttendantSerializer(user)
        return Response(serializer.data)
    

class HostViewSet(viewsets.ViewSet):
    
    def list(self, request):
        queryset = Host.objects.all()
        serializer = HostSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Host.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = HostSerializer(user)
        return Response(serializer.data)


class ParkingSpotViewSet(viewsets.ViewSet):

    def list(self, request):
        queryset = ParkingSpot.objects.all()
        serializer = ParkingSpotSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = ParkingSpot.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = ParkingSpotSerializer(user)
        return Response(serializer.data)
        
    def post(self, request, pk=None, *args, **kwargs):
        instance = ParkingSpot.objects.get(pk=pk)
        serializer = ParkingSpotSerializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
