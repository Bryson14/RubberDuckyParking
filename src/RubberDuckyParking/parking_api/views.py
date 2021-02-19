from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
# https://stoplight.io/blog/crud-api-design/  crud api recommendations

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


