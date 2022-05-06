This is an school project about REST API with MongoDB and Mongoose. This database contains data about events and festivals.

Parameters:
"event_name": String (required)
"startdate": String (required)
"enddate": String
"season": String

The project consists of index.js which start the program with npm start. Routes are in routes.js and the model for creating objects to database is in model.js.
The routes are 

GET localhost:8080/api/getAll  ---- Get all events
GET localhost:8080/api/:id ---- Get an event by id
POST localhost:8080/api/add ---- Add event
PATCH localhost:8080/api/update/:id  ---- Update event
DELETE localhost:8080/api/delete/:id  ---- Delete event

There will be the frontend side available later.
