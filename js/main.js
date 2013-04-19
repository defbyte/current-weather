requirejs.config({
    paths: {
        "backbone": "libs/backbone-min",
        "jquery": "libs/jquery-1.9.1.min",
        "underscore": "libs/underscore-min",
        "log": "libs/log"
    }
});

define([
    "jquery",
    "underscore",
    "backbone",
    "app-config",
    "app/weather-m",
    "app/weather-v",
    "app/search-v"
], function( $, _, Backbone, appConfig, weatherModel, weatherView, searchView ) {

        // Need to break this out as config data loaded at run time.
        // API keys should not be embedded in front-end source.
        weatherModel.API_KEY = appConfig.FORECAST_API_KEY;

        // Success Handler when asking browser's geo location
        function geoSuccess(position) {
            weatherModel.set(
                {
                   'latitude': position.coords.latitude,
                   'longitude': position.coords.longitude
                },
                {silent: true}
            );
            weatherModel.fetch({
                dataType: 'jsonp'
            });
        }

        // Error Handler when asking browser's geo location
        function geoError() {
            weatherView.showError('Could not determine your location automatically, please use the form below.');
        }

        // Ask Browser nicely for geo location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
        } else {
            geoError();
        }

        // Hide the current conditions at startup
        weatherView.$el.hide();
});