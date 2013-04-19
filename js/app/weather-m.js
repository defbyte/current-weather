// Weather App
// Model for retrieving current weather conditions for a location.

define([
    'underscore',
    'backbone',
    'app-config'
],
function( _, Backbone, appConfig ) {

    var WeatherModel = Backbone.Model.extend({

        urlRoot: function() {
            return 'https://api.forecast.io/forecast/' + appConfig.FORECAST_API_KEY;
        },

        url: function() {
            return this.urlRoot() + '/' + this.get('latitude') + ',' + this.get('longitude');
        },

        parse: function(data) {
            // For debugging, output data
            log(data);
            return data;
        }
    });

    return new WeatherModel();
});