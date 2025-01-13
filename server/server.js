// Dependencies
const express = require('express');
const cors = require('cors');

// Constants
const APP = express();
const PORT = 3000;
const API = require("./api.json");

// Server configuration
APP.use(cors());
APP.use(express.json());

APP.get("/", (req, res) => {
    res.json({ message: "Hello from the server!" });
});

// Start the server
APP.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});

// Fetch current weather, all 18 Hong Kong district
async function fetchWeather() {
    try {
        const response = await fetch(API.weather);
        const curr_weather = await response.json();
        console.log(`Current weather: ${JSON.stringify(curr_weather)}`);
    } catch (error) {
        console.error('Failed to fetch weather:', error);
    }
}

const CURR_LOCATION = "Kowloon City"; // Hard-code, preferably track current location
async function fetchLocalWeatherData(district) {
    // Declaring variable
    let curr_loc_weather;
    let rainfall, uv, temperature;

    try {
        const response = await fetch(API.weather);
        const curr_weather = await response.json();

        // Get rainfall
        for (let index in curr_weather.rainfall.data) {
            let record = curr_weather.rainfall.data[index];
            if (record.place === district) {
                rainfall = record;
                break; 
            }
        }

        uv = curr_weather.uvindex.data;

        // Get temperature
        for (let index in curr_weather.temperature.data) {
            let record = curr_weather.temperature.data[index];
            if (record.place === district) {
                temperature = record;
                break;
            }
        }
    } catch (error) {
        console.error('Failed to fetch weather:', error);
    };

    curr_loc_weather = {
        "rainfall": rainfall,
        "uv": uv,
        "temperature": temperature
    };
    console.log(curr_loc_weather);
    return curr_loc_weather;
}

fetchLocalWeatherData(CURR_LOCATION);