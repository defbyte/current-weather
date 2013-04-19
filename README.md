# Current Weather

Experimenting with the Forecast.io API and Google's reverse geocoder, to get familiar with Backbone.js and Require.js.

The app will attempt to get your geographic location from the browser at startup.

The app loads a `js/app-config.js` file at startup, which is NOT included in this repository, as this is where you define your Forecast.io API Key.

    define(function(){
        return {
            FORECAST_API_KEY: '{YOUR API KEY GOES HERE}'
        };
    });

Uses Twitter Bootstrap styles.