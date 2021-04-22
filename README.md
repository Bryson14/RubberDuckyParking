# Parking App

### Development Notes (Milestone 4)
- [x] Slideshow -> [*Google slides*](https://docs.google.com/presentation/d/1GWw_pTDYgEXGQ_F43PeJoPBTckTWWnD7qIIA1loSpC4/edit#slide=id.gd3169a826c_0_114) | [*Downloaded Slides*](https://github.com/Bryson14/RubberDuckyParking/tree/main/documentation/homework_milestones/milestone4)
- [x] Revised Requirements Definition Document -> [*Requirements_Definition.pdf*](https://github.com/Bryson14/RubberDuckyParking/blob/main/documentation/homework_milestones/milestone4/requirements_definition_group_6.pdf)
- [x] Link to Videos ->   [*Video Links*](https://github.com/Bryson14/RubberDuckyParking/blob/main/documentation/homework_milestones/milestone4/links_for_videos.md)
- [x] Running the Project -> [*README#Project Setup*](https://github.com/Bryson14/RubberDuckyParking#user-content-project-setup)
- [x] Different Preset Logins for Grading:  
  - [x] Normal User -> **Username**: *ironman* , **Password**: *loveyou3000*
  - [x] Host -> **Username**: *hostharry* , **Password**: *secrethost444*
  - [x] Attendant -> **Username**: *aliceattendant* , **Password**: *secretattendant444*



### Organization
The project is organized into two main part: `src` and `documentation`. Since this is a semester project, there is lots of documentation and decisions made in `documentation` under their respective milestones folders. `src` contains the django webserver, the website files, database, and anything else to run the app.

### Version Control
Required software is under `src/requirements.txt`. It is recommended to run this project in a virtualenv so their is no issues between python and DJango versions.
This project is controlled through pull requests. Every commit from every member is a pull request. It is recommended that at
least one member of the team review another pull request, before the author merges the pr. The main branch
for every team member should be updated before working every day so avoid merge conflicts.

- To protect our project we have decided to create individual branches while working on new features or making changes to previous features.  The author of the changes must then create a pull request which will be reviewed, tested and accepted by another member of the team before merged back into the main branch.  Utilizing pull requests will help us avoid merge conflicts as well as help keep a history of project changes.

## Project Setup

Create a virtualenv 
```
$ python -m virtualenv ducky_env
```

Activate the virtualenv
```
$ cd ducky_env
$ source Scrpits/activate (Windows)
$ source bin/activate (Linux/ Mac)
```


Clone the repo inside of the virualenv
```
$ cd ducky_env
$ git clone https://github.com/Bryson14/RubberDuckyParking.git
```
Download the packages inside the virtualenv

```
$ (ducky_env) python -m pip install -r RubberDuckyParking/requirements.txt (With active virtualenv)
```

### Django db setup
```
$ (ducky_env) python manage.py migrate
```
- this will create the schema for the models
```
$ (ducky_env) python manage.py db_seed
```
- this is the custom management command that will add some basic models for you

  - your newly created models include new users of each role:
    - Harrison Host:
      - he is a fully equipped host with the following credentials; 
        - username: hostharry
        - password: secrethost444

    - Alice Attendant
      - she is a fully equipped attendant whose boss is Harrison himself. Her credentials include:
        - username: aliceattendant
        - password: secretattendant444

    - Tony Stark
      - he is a good ol regular user whose credentials include:
        - username: ironman
        - password: loveyou3000

  - there is also a spot near you, in Malibu!
    - go ahead, search for malibu under a standard sized spot
      
```
$ (ducky_env) python manage.py createsuperuser
```
- this will create your user that has admin access
```
localhost:8000/admin
```
- go check out the newly created models

Tool Stack:
Linux, DJango Webserver, SQLite, React

### Compiles and hot-reloads for development
```
$ (ducky_env) python manage.py runserver
```

### Unit Testing
to run the api tests:  `python3 manage.py test parking_api`

### System Testing
For best testing results, running the server on many different computers and accessing them from various browsers for desktop and mobile (Brave, Cake, Safari, Chrome, Edge, Mozilla)

### For documentation
See documentation/

### starting your db over
```
$ python manage.py flush
```
- this will remove all your db's data, but it will not change the schema
- If you want to completely start over, delete your db.sqlite3 file and all the migration files except for the `__init__.py` files
    - once this is done, follow the db setup mentioned at the top of this readme

### running the frontend client
```
$ npm run start
```
- cd into the directory client-ducky
- run the command to start the server on localhost:3000
- this runs the frontend while the backend python server acts like an external api    
