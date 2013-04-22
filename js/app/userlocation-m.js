/*
    Weather App
    Model for managing the user's geolocation in one place.
    Requests geolocation from the browser at startup.
*/

define([
    'underscore',
    'backbone',
    'log'
],
function( _, Backbone, log ) {

    var UserLocationModel = Backbone.Model.extend({

        defaults: {
            latitude: 0,
            longitude: 0
        },

        load: function() {
            /*
            Attempt to get geolocation from the browser at startup.
            */
            // Success Handler when asking browser's geo location
            var self = this;
            function geoSuccess(position) {
                self.updateLocation(position.coords.latitude, position.coords.longitude );
            }

            // Error Handler when asking browser's geo location
            function geoError() {
                self.trigger('error', 'Could not determine your location automatically, please use the form below.');
            }

            // Ask Browser nicely for geo location
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
            } else {
                geoError();
            }
        },

        updateLocation: function(latitude, longitude) {
            latitude = latitude || this.get('latitude');
            longitude = longitude || this.get('longitude');
            this.set({
                'latitude': latitude,
                'longitude': longitude
                },
                {silent:true}
            );
            this.trigger('change');
        }
    });

    return new UserLocationModel();
});