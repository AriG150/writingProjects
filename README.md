# Writing Projects

A website for writers suffering from writers block. Select a hillarious prompt to jog you out of the block and start writing away! 

## Requirements
- Build a full stack Node app with at least 2 models.
- Include sign up/log in functionality, with hashed passwords and an authorization flow.
- Incorporate at least one API.
- Have complete RESTful routes with GET, POST, PUT, and DELETE.
- Utilize an ORM to create a database table structure and interact with your relationally-stored data.
- Include wireframes designed during the planning process.
- Have semantically clean HTML and CSS.
- Be deployed online and accessible to the public.

## Technologies Used 
- Node/Express  
  -Key Modules:  
    -Passport/Bycrypt: Authentification and password hashing  
-PostgresSQL  
-Sequelize  

## API
  From the wonderful and hillarious (https://ineedaprompt.com/)  

## User Story 
-As a user I want to...  
  -Signup/Login/Logout  
  -Request a prompt  
  -Write a new project  
  -View all projects  
  -View detail of individual project  
  -Edit/Delete a project  

## Development 

### Sprint 1 
-Wrote user story  
-Wrote basic site architecture  
-Researched API and drafted models  
-Created basic wireframing  

### Sprint 2 
-Implemented auth, including hashed passwords and an authorization flow   

### Sprint 3 
-Create a successful Axios API call   
-Have user select from prompt option and see prompt information   

### Sprint 4 
-Stubbed out routes and set up models   
-Completed routes   

### Sprint 5 
-Styling  

## CRUD Routes and Models  
| CRUD | ROUTE | Function |
| ---- | ----- | -------- |
| GET  |  /homepage | Homepage where user can choose a type of prompt |
| GET  | /auth/signup | Renders signup page | 
| POST | /auth/signup | Creates a new user in the database | 
| GET | /auth/login | Renders login page | 
| POST | /auth/login | Signs in existing user | 
| GET | /auth/logout | Logout user | 
| GET | /project/new | Loads Selected information | 
| POST | /project/new | Create users project information, including entry and prompt information, to the database |
| GET | /project/:id | View the project information |
| POST | /project/:id | Creates the test information |
| GET | /profile| Index of all users projects |
| GET | /profile/edit/:id | Form to edit project name and text information | 
| DELETE | /profile/:id | Deletes project | 
| PUT | /profile/edit:id | Edit the project name and text | 


| MODEL | SCHEMA | ASSOCIATIONS | 
| ----- | ------ | ------------ |
| Entry | text, projectId | Belongs to project | 
| Project | name, promptId, userId | Belongs to user, belongs to prompt, has many entries | 
| Prompt | text | Has many projects | 
| User | name, email, password | Has many projects | 

## Acknowledgements
  A huge thank you to my instructor, Steve Peters, my instructional assistant, Sarah King, and my TA's, Gavin Collander, Garrett O Moore, Michael Dudley, and Kelsey Cox. 

## Future Improvements
-Improve styling   
-Improve user flow
