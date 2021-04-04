from django.shortcuts import render, get_object_or_404, redirect
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from .models import BaseUser, Attendant, Host, ParkingSpot, ParkingSize, Location
from .serializers import BaseUserSerializer, AttendantSerializer, HostSerializer, ParkingSizeSerializer, ParkingSpotSerializer, ParkingSizeSerializer
from .permissions import AuthenticatedPermission, HostPermission
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.generics import CreateAPIView
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny


class RegisterUser(CreateAPIView):
    serializer_class = BaseUserSerializer
    permission_classes=[AllowAny]

    def perform_create(self, serializer):
        instance = serializer.save()
        instance.set_password(instance.password)
        instance.save()


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
    
    def get_queryset(self):
        '''
        possible query parameters:
        - 
        '''
        user = self.request.user
        queryset = ParkingSpot.objects.all()
        return queryset

    def list(self, request):
        serializer = ParkingSpotSerializer(self.get_queryset(), many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        user = get_object_or_404(self.get_queryset(), pk=pk)
        serializer = ParkingSpotSerializer(user)
        return Response(serializer.data)
        
    def post(self, request, pk=None, *args, **kwargs):
        instance = get_queryset().get(pk=pk)
        serializer = ParkingSpotSerializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class ParkingSizeViewSet(viewsets.ViewSet):

    def get_queryset(self):
        return ParkingSize.objects.all()

    def list(self, request):
        serializer = ParkingSizeSerializer(self.get_queryset(), many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        user = get_object_or_404(self.get_queryset(), pk=pk)
        serializer = ParkingSizeSerializer(user)
        return Response(serializer.data)
        
    def post(self, request, pk=None, *args, **kwargs):
        instance = get_queryset().get(pk=pk)
        serializer = ParkingSizeSerializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
