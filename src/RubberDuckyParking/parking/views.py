from django.shortcuts import render


def index(request):
    context = {}
    return render(request, 'parking/index.html', context)

def host_index(request):
    context = {}
    return render(request, 'parking/host_index.html', context)

