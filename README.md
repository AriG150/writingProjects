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
    -User: username, email, and hashed password of a user
    -Projects: includes project name, promptId, userId
    -Entries: includes the text of each entry for a project 
    -Prompts: includes the prompt information for a project

## API
  From the wonderful and hillarious (https://ineedaprompt.com/)

## User Story 

## Development 

## CRUD routes 

* Run `npm install` to install dependencies
  * Use `npm run lint:js` to lint your JS
  * Use `npm run lint:css` to lint your CSS
  * Use `npm test` to run tests
* Setup the databases
  * Run `createdb express_auth_development` to create the development database
  * Run `createdb express_auth_test` to create the test database
  * Run `sequelize db:migrate` to run migrations
