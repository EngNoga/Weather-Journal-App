// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
// specify the localhost port number (Url: localhost:8000)
const port = 8000;

// setup server by listen function
const server = app.listen(port,listening);

// console sure that server is running
function listening(){
    console.log("server running");
    console.log(`running on localhost: ${port}`);
}

//GET route
// get and send all weather data from projectData object
app.get('/allWeatherData',sendWeatherData);
// req as request
// res as respond
 function sendWeatherData(req, res) {
    res.send(projectData);
  }

// POST route
// post and add weather data to projectData object
  app.post('/addWeatherData',addWeatherData);
  // req as request
 // res as respond
 /*
  * initialize projectData object by body 
  * pass attributes to projectData (date,temp and content)
  */
  function addWeatherData(req,res){
      projectData = req.body; 
      projectData.date = req.body.date;
      projectData.temp = req.body.temp;
      projectData.feel = req.body.feel;
      // print projectData in console node.js (run server)
      console.log(projectData);
  }