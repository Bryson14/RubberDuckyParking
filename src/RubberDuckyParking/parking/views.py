from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views.generic.base import TemplateView 
from os import pathsep
from datetime import date as D

class Index(TemplateView):
    template_name = 'parking/index.html'


class AboutUs(TemplateView):
    template_name = 'parking/about.html'


class LotTools(TemplateView):
    template_name = 'parking/parking_lot_tools.html'


class HostIndex(TemplateView):
    template_name = 'parking/host_index.html'


def host_detail(request):
    if request.user.is_authenticated:
        # TODO check to see if is a registered host
        context = {}
        return render(request, 'parking/host_details.html', context)
    else:
        return host_index(request)

def search(request):
    location = "Logan, UT"
    date = D.today().isoformat()
    size = "Standard"
    if 'location' in request.GET and request.GET["location"] != "":
        location = request.GET['location']
    if 'date' in request.GET and request.GET["date"] != "":
        date = request.GET["date"]
    if "size-type" in request.GET:
        size = request.GET["size-type"]
    context = {"location": location, "date": date, "size": size}
    return render(request, 'parking/search_reservation.html', context)


def sign_up(request):
    context = {}
    return render(request, 'parking/sign_up.html', context)


def user(request):
    if request.user.is_authenticated:
        ''' 
        # TODO return different page for host
        if request.user.is_host():
            return host_detail(request)
        '''
        if request.user.get_full_name():
            username = request.user.get_full_name()
        else:
            username = request.user.get_username()
        context = {
            "username": username,
        }
        return render(request, 'parking/user_details.html', context)
    else:
        return redirect('signup')


def my_profile(request):
    if request.user.is_authenticated:
        return redirect('signup')
    else:
        return redirect('signup')


def attendant_detail(request, attendant_id="Empty"):
    context = {"attendant_id": attendant_id}
    return render(request, 'parking/attendant_details.html', context)


def login(request):
    context = {}
    return render(request, 'parking/login.html', context)


def reservation(request, res_id="None"):
    context = {"reservation_id": res_id}
    return render(request, 'parking/reservation_detail.html', context)


def get_image(filename, folder):
    p = f'..{pathsep}{folder}{pathsep}{filename}'
    print(p)
    return(open(p))


def get_image_host(request):
    return HttpResponse(get_image(request.path, 'host'), content_type='image\jpeg')


def get_image_user(request):
    return HttpResponse(get_image(request.path, 'users'), content_type='image\jpeg')


def get_image_loc(request):
    return HttpResponse(get_image(request.path, 'location'), content_type='image\jpeg')


