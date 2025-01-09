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

// Asynchronous function to fetch weather
async function fetchWeather() {
    try {
        const response = await fetch(API.weather);
        const curr_weather = await response.json();
        console.log(`Current weather: ${JSON.stringify(curr_weather)}`);
    } catch (error) {
        console.error('Failed to fetch weather:', error);
    }
}

// Call the function to perform the fetch operation
fetchWeather();
