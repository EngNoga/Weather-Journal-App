/* Global Variables */
/* I registered to OpenWeatherMap Website */
const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
// My ApI Key (you will change this for working website)
const myApiKey = your_secret_key;
const apiKey = "&APPID=" + myApiKey + "&units=imperial";

// Create a new date instance dynamically with JS
let d = new Date();
// I add one with Month as calculate month from 0
let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

// add EventListener click action for generate button with performAction function
document.getElementById("generate").addEventListener("click", performAction);

//note: I use some names in Udacity's class room
/**
 * declare two variable to take the value from page (zipCode and Feelings)
 * uses the promises function to use fetch to make an async GET request for a route
 * uses .then() to call another async function to make a POST request to store this data
 * declare getWeather() function takes a Api URL, ZipCode, and Api Key as parameters
 * declare postData() function takes a URL, and a data object as parameters
 * data object is Date is newDate declare as global variable
 *                temp is temperature will return value from URL API (I use (data.main.temp to return temp that inside main property))
 *                feel is feelings will return value from the textarea html element
 * uses .then() to call retrieveData function to update user interface by data object (date, temp, feelings)
 */
function performAction(e) {
  const newZip = document.getElementById("zip").value;
  const feelings = document.getElementById("feelings").value;
  //console.log(newDate);

  getWeather(baseURL, newZip, apiKey)
    .then(function (data) {
      // Add data
      console.log(data);
      postData("/addWeatherData", {
        date: newDate,
        temp: data.main.temp,
        feel: feelings,
      });
    })
    .then(function () {
      retrieveData();
    });
}

/**
 * declare getWeather() function takes a Api URL, ZipCode, and Api Key as parameters
 * uses async keywords to execute asynchronous JavaScript code.
 * fetch is asynchronous function
 * fetch function take API URL and return the weather data
 * uses await keywords to wait API respond
 * res as respond
 * uses try and catch to return the request data if not it will return error
 */
const getWeather = async (baseURL, zip, key) => {
  const res = await fetch(baseURL + zip + key);
  console.log(res);
  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

/**
 * declare postData() function takes  URL, and data object as parameters
 * uses async keywords to execute asynchronous JavaScript code.
 * fetch is asynchronous function
 * fetch function take url and function for post data to the html page
 * uses await keywords to wait API respond
 * uses try and catch to return the request data if not it will return error
 */
const postData = async (url = "", data = {}) => {
  console.log(data);
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  try {
    const newWeatherData = await response.json();
    console.log(newWeatherData);
    return newWeatherData;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

/**
 * declare retrieveData() function
 * uses async keywords to execute asynchronous JavaScript code.
 * fetch is asynchronous function
 * fetch function take url path that request all data stored in this path
 * uses await keywords to wait API respond
 * uses try and catch to return the request data if not it will return error
 * inside try section will update the html element by the all data is returned by use fetch function
 */
const retrieveData = async () => {
  const request = await fetch("/allWeatherData");
  try {
    // Transform into JSON
    const allData = await request.json();
    console.log(allData);
    // Write updated data to DOM elements
    document.getElementById("temp").innerHTML =
      Math.round(allData.temp) + " degrees";
    document.getElementById("content").innerHTML = allData.feel;
    document.getElementById("date").innerHTML = allData.date;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};
