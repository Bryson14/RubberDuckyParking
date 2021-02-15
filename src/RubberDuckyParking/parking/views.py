from django.shortcuts import render
from django.http import HttpResponse
from os import pathsep


def index(request):
    context = {}
    return render(request, 'parking/index.html', context)


def host_index(request):
    context = {}
    return render(request, 'parking/host_index.html', context)


def host_detail(request, host_id="empty"):
    context = {"host_id": host_id}
    return render(request, 'parking/host_details.html', context)


def user_detail(requst, user_id="Empty"):
    context = {"user_id": user_id}
    return render(requst, 'parking/user_details.html', context)


def lot_tools(request):
    context = {}
    return render(request, 'parking/parking_lot_tools.html', context)


def search(request):
    context = {}
    return render(request, 'parking/search_reservation.html', context)


def about(request):
    context = {}
    return render(request, 'parking/about.html', context)


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


