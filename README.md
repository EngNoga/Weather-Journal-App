# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Description:
Weather app built in basic html,css, JavaScript and node.js.

### Author:
Naglaa Mohammed Mohammed Hamed.


### Techs:
1. Html: built the basic index page.
2. Css: style the page.
3. JS: built an asynchronous functions and get API then update data user interface.
4. Node.js : install express ,body-parser and cors packages then setup server with listen function

### Websites used in this project
1. My Udacity Professional track classroom.
2. Udacity Tutors.
3. I use some names in Udacity's classroom

### OverView on Server JS file
1. Install packages: (by using [npm install package-name] in node.js console)
   - express
   - body-parser
   - cors
2. Require Express to run server and routes.
3. Start up an instance of app.
4. Configuring express to use body-parser as middle-ware.
5. Use Cors for cross origin allowance.
6. Initialize the main project folder 
        by using static property for specifying the project folder [Here "website] contains on website pages.
7. Specify the localhost port number (Url Here: localhost:8000)
8. Use listen function to setup server and print running in node.js console.
9. Declare GET route to get and send all weather data from projectData object.
10. Declare  POST route to post and add weather data to projectData object.
11. Initialize projectData object by body then Pass attributes to projectData (date,temp and feel).
            

### OverView on App JS file 
1. Global variables:
   - registered to OpenWeatherMap Website to get my API key
   - declare two variables (baseURL is API basic URL and apiKey is my API key after register).
   - Create a new date instance dynamically with JS 
   - note: Add one on Month as month function started from 0.
2. Add EventListener click action for generate button with performAction function
3. performAction()
   - declare two variable to take the value from page (zipCode and Feelings).
   - uses the promises function to use fetch to make an async GET request for a route.
   - uses .then() to call another async function to make a POST request to store this data.
   - declare getWeather() function takes a Api URL, ZipCode, and Api Key as parameters.
   - declare postData() function takes a URL, and a data object as parameters.
   - data object is
               -- date is newDate declare as global variable.
               -- temp is temperature will return value from URL API (I use (data.main.temp to return temp 
                  that inside main property))
               -- feel is feelings will return value from the textarea html element
   - uses .then() to call retrieveData function to update user interface by data object (date, temp, feelings).
  
4. getWeather()
   - declare getWeather() function takes a Api URL, ZipCode, and Api Key as parameters.
   - uses async keywords to execute asynchronous JavaScript code.
   - fetch is asynchronous function.
   - fetch function take API URL and return the weather data.
   - uses await keywords to wait API respond.
   - uses try and catch to return the request data if not it will return error.
  
5. postData()
   - declare postData() function takes  URL, and data object as parameters.
   - uses async keywords to execute asynchronous JavaScript code.
   - fetch is asynchronous function.
   - fetch function take url and function for post data to the html page.
   - uses await keywords to wait API respond.
   - uses try and catch to return the request data if not it will return error.

6. retrieveData()
   - declare retrieveData() function.
   - uses async keywords to execute asynchronous JavaScript code.
   - fetch is asynchronous function.
   - fetch function take url path that request all data stored in this path.
   - uses await keywords to wait API respond.
   - uses try and catch to return the request data if not it will return error.
   - inside try section will update the html element by the all data is returned by use fetch function.
 

### Css File
  - I update height in id app (150vh) to appear the entryHolder.
  
### Note
  - I update let to const for apikey 

### Thank you, I hope I covered all that is wanted
### Good Luck.
