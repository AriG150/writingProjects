# Writing Projects

A website for writers suffering from writers block. Select a hillarious prompt to jog you out of the block and start writing away! 

## Requirements
1. Build a full stack Node app with at least 2 models.
2. Include sign up/log in functionality, with hashed passwords and an authorization flow.
3. Incorporate at least one API.
4. Have complete RESTful routes with GET, POST, PUT, and DELETE.
5. Utilize an ORM to create a database table structure and interact with your relationally-stored data.
6. Include wireframes designed during the planning process.
7. Have semantically clean HTML and CSS.
8. Be deployed online and accessible to the public.

#### Scaffold w/tests (see `master` branch)

* Run `npm install` to install dependencies
  * Use `npm run lint:js` to lint your JS
  * Use `npm run lint:css` to lint your CSS
  * Use `npm test` to run tests
* Setup the databases
  * Change the database names in `config/config.json` to reflect your project
  * Run `createdb project_name_development` to create the development database
  * Run `createdb project_name_test` to create the test database

#### Finished version (see `brian-finished` branch)

* Run `npm install` to install dependencies
  * Use `npm run lint:js` to lint your JS
  * Use `npm run lint:css` to lint your CSS
  * Use `npm test` to run tests
* Setup the databases
  * Run `createdb express_auth_development` to create the development database
  * Run `createdb express_auth_test` to create the test database
  * Run `sequelize db:migrate` to run migrations
