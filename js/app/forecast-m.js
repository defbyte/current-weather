/*
    Weather App
    Model for retrieving current weather conditions for a location 
    via the Forecast.io API
*/

define([
    'underscore',
    'backbone',
    'app-config',
    './userlocation-m',
    'log'
],
function( _, Backbone, appConfig, userLocationModel, log ) {

    var ForecastModel = Backbone.Model.extend({

        initialize: function() {
            this.listenTo( userLocationModel, 'change', this.load );
        },

        load: function() {
            this.fetch();
        },

        urlRoot: function() {
            return 'https://api.forecast.io/forecast/' + appConfig.FORECAST_API_KEY;
        },

        url: function() {
            return this.urlRoot() + '/' + userLocationModel.get('latitude') + ',' + userLocationModel.get('longitude');
        },

        fetch: function() {
            log('ForecastModel fetch');
            // Override Model's fetch so that we request JSONP
            return Backbone.Model.prototype.fetch.call(this, {dataType: 'jsonp'});
        },

        parse: function(data) {
            // For debugging, output data
            log(data);
            return data;
        }
    });

    return new ForecastModel();
});