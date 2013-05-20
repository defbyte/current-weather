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
                self.updateLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    forceRefresh: true
                });
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

        updateLocation: function(options) {
            latitude = options.latitude || this.get('latitude');
            longitude = options.longitude || this.get('longitude');
            if (options.forceRefresh) {
                this.set({
                    'latitude': latitude,
                    'longitude': longitude
                    },
                    {silent:true}
                );
                this.trigger('change');
            } else {
                this.set({
                    'latitude': latitude,
                    'longitude': longitude
                    }
                );
            }
        }
    });

    return new UserLocationModel();
});