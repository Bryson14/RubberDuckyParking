from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from parking_api.models import BaseUser

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
    if request.method == "POST":
        print(f"Creating profile with {request.POST}")
        if request.POST['password'] == request.POST['password2']:
            info = {}
            for item in request.POST:
                if item == "password2" or item == "csrfmiddlewaretoken":
                    ...
                elif item in {'email', 'phoneNumber', 'password', 'username'}:
                    info[item] = request.POST[item]
            print(f"info: {info}")

            user = BaseUser(email=info["email"], phone_number=info["phoneNumber"],
                            password=info["password"], username=info["username"])
            # TODO how to encrpyt password as its saved to the user model
            user.save()

        else:
            JsonResponse({"501": "Server Error"})

        return redirect("/accounts/login/")

    elif request.method == "GET":
        print("User incorrectly tried to create a user profile")
        return redirect('/user/')


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


