from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import BaseUser
import os, random

@receiver(post_save, sender=BaseUser, dispatch_uid="assign_profile_pic")
def assign_profile_pic(sender, instance, created, **kwargs):
    ## this is where we will assign the random profile picture
    print(os.listdir("static/default_avatars"))
    if created:
        instance.avatar = random.choice(os.listdir("static/default_avatars"))
        instance.save()
