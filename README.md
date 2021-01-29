# Parking App

## Project setup

- See src/requirements.txt for dependancies
- from "software_development_project_3450/src/RubberDuckyParking"
```
$ python manage.py makemigrations parking
$ python manage.py sqlmigrate parking 0001
$ python manage.py migrate

After running these:
$ run python manage.py makemigration --empty parking --name populate

This will make a file called 0002_populate.py in src/RubberDuckyParking/parking/migrations

Replace the contents of 0002_populate.py with src/auto_populate_database.py.

Then run:

$ python manage.py makemigrations
$ python manage.py migrate

You now have prepopulated data for the app.

Now to create a superuser to access /admin

$ python manage.py createsuperuser

If the following error occurs, run:
"Superuser creation skipped due to not running in a TTY. You can run `manage.py createsuperuser` in your project to create one manually.
"

$ winpty python manage.py createsuperuser

Enter a username, email, and password. (They don't have to be real at this point)

After, to start the server, run:

$ python manage.py runserver
```

### Compiles and hot-reloads for development
```
python manage.py runserver
```

### For documentation
See documentation/