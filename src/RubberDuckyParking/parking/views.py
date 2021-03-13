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


