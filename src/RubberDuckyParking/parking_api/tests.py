from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework.test import APIRequestFactory
import json
from parking_api.models import BaseUser

# Create your tests here.

class UserTests(TestCase):

    def setUp(self):
        self.user = BaseUser.objects.create(
            email="fake@test.com",
            username='fakeuser',
            first_name="fakefirst",
            last_name="fakelast",
            is_staff=False,
        )
        self.user.set_password('987testing')
        self.user.save()
        self.client = APIClient()
        self.token = ''


    def test_log_in_and_get_me(self):
        print('testing login and getting own user')
        res = self.client.post(
            '/api/api-token-auth/',
            {
                'username': 'fakeuser',
                'password': '987testing'
            }
        )
        token = res.data.get('token')
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + token)
        self.assertEqual(res.status_code, 200)

        me = self.client.get('/api/users/me/', token=token)
        self.assertEqual(me.data.get('user').get('pk'), self.user.pk)

    
    def test_get_parking_sizes(self):
        self.client.force_authenticate(user=self.user)
        print('testing creating a model')
        size = self.client.post('/api/parking-sizes/', {
            'name': 'parking spot size',
            'description': 'this is a parking spot size',
            'min_width': 3.33,
            'min_length': 4.44
        })
        print('testing retreiving models')
        self.assertEqual(size.data.get('pk'), 1)
        res = self.client.get('/api/parking-sizes/')
        self.assertEqual(len(res.data), 1)
