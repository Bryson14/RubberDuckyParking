# Parking App

### Organization
The project is organized into two main part: `src` and `documentation`. Since this is a semester project, there is lots of documentation and decisions made in `documentation` under their respective milestones folders. `src` contains the django webserver, the website files, database, and anything else to run the app.

### Version Control
Required software is under `src/requirements.txt`. It is recommended to run thie project in a virtualenv so their is no issues between python and DJango versions.

## Project setup


### Creating a prepopulated database and admin for superuser access
```
$ python manage.py makemigrations parking
$ python manage.py sqlmigrate parking 0001
$ python manage.py migrate

After running these:
$ run python manage.py makemigrations --empty parking --name populate

This will make a file called 0002_populate.py in src/RubberDuckyParking/parking/migrations

Replace the contents of 0002_populate.py with src/auto_populate_database.py.

Then run:

$ python manage.py makemigrations
$ python manage.py migrate

You now have prepopulated data for the app.

Now to create a superuser to access /admin

$ python manage.py createsuperuser

If the following error occurs, run:
"Superuser creation skipped due to not running in a TTY. 
You can run `manage.py createsuperuser` in your project to create one manually.
"

$ winpty python manage.py createsuperuser

Enter a username, email, and password. (They don't have to be real at this point)

After, to start the server, run:

$ python manage.py runserver
```
Tool Stack:
Linux, DJango Webserver, SQLite, Vue

### Compiles and hot-reloads for development
```
python manage.py runserver
```

### Unit Testing
`./manage.py test` will run the JDango's built in system to run unit test that are found in `test.py`

### System Testing
For best testing results, running the server on many different computers and accessing them from various browsers for desktop and mobile (Brave, Cake, Safari, Chrome, Edge, Mozilla)

### For documentation
See documentation/