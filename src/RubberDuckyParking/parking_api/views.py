from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from .models import BaseUser, Attendant, Host
from .serializers import UserSerializer, AttendantSerializer, HostSerializer
from rest_framework import viewsets
from rest_framework import permissions


class UserViewSet(viewsets.ModelViewSet):
    '''
    api endpoint that allows users to be edited
    '''
    queryset = BaseUser.objects.all()
    serializer_class = UserSerializer
    psermissions_classes = [permissions.IsAuthenticated]


class AttendantViewSet(viewsets.ModelViewSet):
    '''
    api endpoint for attendants
    '''
    queryset = Attendant.objects.all()
    serializer_class = AttendantSerializer


class HostViewSet(viewsets.ModelViewSet):
    '''
    api endpoint for attendants
    '''
    queryset = Host.objects.all()
    serializer_class = HostSerializer

@login_required
def user(request, id=None):
    """
    Retrieves User data (R), updates user data (U), or deletes a user (D)
    """
    context = {}
    print("user")
    return invalid_parameters(request)

@login_required
def host(request):
    """
    Creates a host (C), Retrieves host data (R), updates host data (U), or deletes a host (D)
    """
    context = {}
    print("host")
    return invalid_parameters(request)

def create_profile(request):
    print(f"Creating profile with {request.GET}")

    return JsonResponse({"found": "doope"})


def test(request):
    print("here", request)
    return JsonResponse({"dumb": "not working"})

# def login(request):
#     """
#     Validates a host or user login. Is a 'might do' specification
#     """
#     context = {}
#     print("login")
#     return invalid_parameters(request)


def invalid_parameters(request):
    """
    Tell the user about bad code
    """
    parameters = request.GET
    print(parameters)
    data = {
        'status': "400",
        'msg'   : "Invalid parameters"
    }
    return JsonResponse(data)


