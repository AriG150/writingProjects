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

## CRUD Routes and Models  
| CRUD | ROUTE | Function |
| ---- | ----- | -------- |
| GET  |  /homepage | Homepage where user can choose a type of prompt |
| GET  | /auth/signup | Renders signup page | 
| POST | /auth/signup | Creates a new user in the database | 
| GET | /auth/login | Renders login page | 
| POST | /auth/login | Signs in existing user | 
| GET | /auth/logout | Logsout user | 

