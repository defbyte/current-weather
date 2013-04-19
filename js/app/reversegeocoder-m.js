// Weather App
// Model for reverse geocoding
// must set latitude and longitude before fetching.

define([
    'underscore',
    'backbone',
    'log'
],
function( _, Backbone, log ) {

    var ReverseGeocoderModel = Backbone.Model.extend({

        url: function() {
            return 'http://maps.googleapis.com/maps/api/geocode/json';
        },

        parse: function(data) {
            var obj = {address: ''};
            if (data.status == 'OK') {
                if (data.results.length > 1) {
                    obj.address = data.results[1].formatted_address;
                }
            }
            // For debugging
            log('revgeo', obj, data);
            return obj;
        }
    });

    return new ReverseGeocoderModel();
});