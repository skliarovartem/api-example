Profile was added to User as a small example. Advanced error handling and requests logging added.
.env file added to repository as example, but it never must be stored on real project.

Start application: 'docker-compose up'

After application is started use 'api-example.postman_collection.json' to import collection to Postman.
Execute requests in the following sequence:

POST users - to create new user,

GET users - to get list of users,

POST login - to login,

GET own profile - to get own profile
