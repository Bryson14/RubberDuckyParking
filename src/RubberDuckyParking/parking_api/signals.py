from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import BaseUser
from rest_framework.authtoken.models import Token

@receiver(post_save, sender=BaseUser, dispatch_uid="create_token_and_profile_pic")
def create_token_and_profile_pic(sender, instance=None, created=False, **kwargs):
    # assign a user a token, and if they don't have a profile pic, assign one
    if created:
        Token.objects.create(user=instance)
