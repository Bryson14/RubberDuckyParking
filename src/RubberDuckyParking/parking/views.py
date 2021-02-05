from django.shortcuts import render
from django.http import HttpResponse
from os import pathsep

def index(request):
    context = {}
    return render(request, 'parking/index.html', context)

def host_index(request):
    context = {}
    return render(request, 'parking/host_index.html', context)

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


