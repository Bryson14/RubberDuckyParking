'''
this is to make the default user model something else, but we don't have to worry about that right now
'''
# '''
# reference https://scottbarnham.com/blog/2008/08/21/extending-the-django-user-model-with-inheritance.1.html
# '''

# from django.conf import settings
# from django.contrib.auth.backends import ModelBackend
# from django.core.exceptions import ImproperlyConfigured
# from django.apps import apps

# class CustomUserModelBackend(ModelBackend):
#     def authenticate(self, username=None, password=None):
#         try:
#             user = self.user_class.objects.get(username=username)
#             if user.check_password(password):
#                 return user
#         except self.user_class.DoesNotExist:
#             return None

#     def get_user(self, user_id):
#         try:
#             return self.user_class.objects.get(pk=user_id)
#         except self.user_class.DoesNotExist:
#             return None

#     def create_superuser(self, email, is_staff, phone_number, password):
#         print("WHAT IS GOING ON")
#         user = self.user_class(
#                           email = email,                         
#                           is_staff = is_staff,
#                           )
#         user.set_password(password)
#         user.phone_number = phone_number
#         user.save(using=self._db)
#         return user

#     @property
#     def user_class(self):
#         if not hasattr(self, '_user_class'):
#             self._user_class = apps.get_model(*settings.CUSTOM_USER_MODEL.split('.', 2))
#             if not self._user_class:
#                 raise ImproperlyConfigured('Could not get custom user model')
#         return self._user_class