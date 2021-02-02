# Project plan

## Summary
- The purpose of this project is to create an application that will allow people to rent out available parking space 
and for other users to rent this space.
- The basic structure of the project is as follows:
    - A database backend wrapped in a API that will allow for users to access the website from their devices. The 
      backend is expected to be written in DJango.
    - A webserver that will distribute the necessary files to host the website. The webserver is also expected to 
    be written in Python and DJango.
    - Front end template code will be filled and stylized with Vue and Bootstrap. This will increase the
    User's Experience while using the website.
- Users
    - The users of the app would be people looking to rent a parking space (Users) and people who own parking space
    that are willing to rent (Hosts)
    - The Host and the Users are separated in the database tables
    - The system will notify host and users of when to expect a parking space to be used. If the parking 
  spot is only avaible for a period of time, the system will also notify both parties of a nearing expiration.
      - the system also show validation so the host can verify that a certain user has paid for a parking spot
    
## Team Organization
- There will be members that work on the API, database (backend), and most of the members will work also on the front end.
- Familiar with Databases
    - Bryson

- Familiar with DJango
  - Bryson
  
- Familiar with html, css, and js (maybe Vue)
  - Bryson 
  

- Bryson, Peyton, Brandon, Andrew

## Overall Software Development Process
Following an Agile Software Development Cycle as follows:

### Requirements Analysis and Resource Planning
- Milestone 1 will mainly cover this part of the development process. In this section, we will cover the overall process
 and concept for the parking app
 
- Here we will layout the main structure for the database, api, webserver, ui/ux, and website styling. 

### Design and Prototyping
- The first part of this section will be breaking down the large decision in the previous section into manageble chunks.
This includes editing the UML diagrams to include details such as variable types, allowable api calls, color schemes,
  user experience, etc.

- This process will also include prototyping with the Django webframe, DJango ORM and database, deciding on the database used (MySQL, SQLite, PostGreSQL, etc.)
- We also will decide all the possible api calls that should exist.
### Software Development
- In the part of the development, we will mainly be working to carry out the plan in the previous sections. This will include 
writing code, creating unit test and other kinds of tests, carrying out user interface surveys, etc.
### Deployment (Submission)
- We will carry out the requirements needed for the class project and any other self-imposed requirements. 
- We might deploy the application on a server in order for friends and family to see out project.

### Maintenance and Updates
- This section of the software development cycle will be the least important as this is a class project and will
not be used in real world situations. Hence, maintainance for users doesn't make sense.



## Policies, procedures, or tools for communication
- We will be using GitHub and hosting the main branch @ https://github.com/Bryson14/software_development_project_3450.
- We also are using Slack to communicate and send files and such.
- For now, we will not make all the members collaborators on the git repo. This way, they much make a fork and pull request
to add to the project. This will help with merge errors especially since we are all working remotely and might push and post to the repo at different times.
  

## Risk analysis
- We might not achieve all the requirements that we set for ourselves.