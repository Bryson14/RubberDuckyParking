from django.apps import AppConfig


class ParkingApiConfig(AppConfig):
    name = 'parking_api'
    
    def ready(self):
        from . import signals
