// Weather
// This module makes requests against the Forecast.io Weather API

define([
    'backbone',
    'underscore'
],
function( Backbone, _ ) {

    /*
    I want an object for making Forecast.io Weather Data Calls

    * Set the API KEY
    * get current weather given Latitude and Longitude
    * get weather for given Space and Time

    

    */

    /*
    API URL Format:
    https://api.forecast.io/forecast/APIKEY/LATITUDE,LONGITUDE[,TIME]
    TIME: Unix time (seconds since Unix epoch)
    */
    var API_URL = "https://api.forecast.io/forecast/APIKEY/";

    function getApiUrl(api_key) {
        return API_URL.replace('APIKEY', api_key);
    }

    var Weather = {
        API_KEY: "",

        test: function(){
            /* Make a test call to the Forecast.io API */
            return getApiUrl(this.API_KEY);
        }
    };

    return Weather;
});