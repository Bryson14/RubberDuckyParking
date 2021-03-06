from django import forms
from src.RubberDuckyParking.parking_api.models import User


class UserForm(forms.ModelForm):

    class Meta:
        model = User
        fields = [
         "first_name",
        "last_name",
        "username",
        "password",
        "date_joined",
        "phone_number",
        "email"
        ]
        widgets = {
        'password': forms.PasswordInput(),
    }