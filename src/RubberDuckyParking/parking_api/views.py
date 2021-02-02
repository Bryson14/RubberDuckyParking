from django.shortcuts import render
from django.http import JsonResponse
# https://stoplight.io/blog/crud-api-design/  crud api recommendations

def user(request, id=None):
    """
    Retrieves User data (R), updates user data (U), or deletes a user (D)
    """
    context = {}
    print("user")
    return invalid_parameters(request)


def host(request):
    """
    Creates a host (C), Retrieves host data (R), updates host data (U), or deletes a host (D)
    """
    context = {}
    print("host")
    return invalid_parameters(request)


def login(request):
    """
    Validates a host or user login. Is a 'might do' specification
    """
    context = {}
    print("login")
    return invalid_parameters(request)


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


