from django.shortcuts import render, get_object_or_404, redirect
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from .models import BaseUser, Attendant, Host
from .serializers import BaseUserSerializer, AttendantSerializer, HostSerializer
from rest_framework import generics
from rest_framework.renderers import TemplateHTMLRenderer
from rest_framework.response import Response
from rest_framework.views import APIView


class BaseUserList(generics.ListCreateAPIView):
    queryset = BaseUser.objects.all()
    serializer_class = BaseUserSerializer


class BaseUserDetail(APIView):
    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'base_user.html'

    def get(self, request, pk):
        base_user = get_object_or_404(BaseUser, pk=pk)
        serializer = BaseUserSerializer(base_user)
        return Response({'serializer': serializer, 'user': base_user})

    def post(self, request, pk):
        base_user = get_object_or_404(BaseUser, pk=pk)
        serializer = BaseUserSerializer(base_user, data=request.data)
        if not serializer.is_valid():
            return Response({'serializer': serializer, 'user': base_user})
        serializer.save()
        return redirect('users-detail', pk=pk)


class AttendantList(generics.ListCreateAPIView):
    queryset = Attendant.objects.all()
    serializer_class = AttendantSerializer


class AttendantDetail(APIView):
    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'attendant.html'

    def get(self, request, pk):
        attendant = get_object_or_404(BaseUser, pk=pk)
        serializer = AttendantSerializer(attendant)
        return Response({'serializer': serializer, 'attendant': attendant})

    def post(self, request, pk):
        attendant = get_object_or_404(Attendant, pk=pk)
        serializer = AttendantSerializer(attendant, data=request.data)
        if not serializer.is_valid():
            return Response({'serializer': serializer, 'attendant': attendant})
        serializer.save()
        return redirect('attendants-detail', pk=pk)


class HostDetail(APIView):
    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'host.html'

    def get(self, request, pk):
        host = get_object_or_404(Host, pk=pk)
        serializer = HostSerializer(host)
        return Response({'serializer': serializer, 'host': host})

    def post(self, request, pk):
        host = get_object_or_404(Host, pk=pk)
        serializer = HostSerializer(Host, data=request.data)
        if not serializer.is_valid():
            return Response({'serializer': serializer, 'host': host})
        serializer.save()
        return redirect('hosts-detail', pk=pk)


class HostList(generics.ListCreateAPIView):
    queryset = Host.objects.all()
    serializer_class = HostSerializer


