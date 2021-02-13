from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import BaseUser

@receiver(post_save, sender=BaseUser, dispatch_uid="assign_profile_pic")
def assign_profile_pic(sender, instance, **kwargs):
    ## this is where we will assign the random profile picture
    pass
