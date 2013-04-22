/*
    Current Weather App.
    Displays current weather information using the Forecast.io API.
    Attempts to get human readable location inforation from Google's Reverse Geocoder API.
*/

requirejs.config({
    paths: {
        "backbone": "libs/backbone-min",
        "jquery": "libs/jquery-1.9.1.min",
        "underscore": "libs/underscore-min",
        "log": "libs/log"
    }
});

define(function() {
    // WeatherView sets the application up
    require([
        'app/userlocation-m',
        'app/weather-v',
        'app/search-v',
        'app/reversegeocoder-v'
    ], function(userLocationModel, weatherView, searchView, revgeoView){
        log('we could do stuff here with our 3 views.');
        userLocationModel.load();
    });
});