/*
    Weather App
    Model for reverse geocoding given a latitude and longitude via Google's API.
*/

define([
    'underscore',
    'backbone',
    './userlocation-m',
    'log'
],
function( _, Backbone, userLocationModel, log ) {

    var ReverseGeocoderModel = Backbone.Model.extend({

        defaults: {
            address: ''
        },

        url: function() {
            return 'http://maps.googleapis.com/maps/api/geocode/json';
        },

        initialize: function() {
            this.listenTo( userLocationModel, 'change', this.fetch );
        },

        fetch: function() {
            log('revgeoModel fetch');
            return Backbone.Model.prototype.fetch.call(this, {
                dataType: 'json',
                data: {
                    latlng: userLocationModel.get('latitude') + ',' + userLocationModel.get('longitude'),
                    sensor: false
                }
            });
        },

        parse: function(data) {
            var obj = {address: ''};
            if (data.status == 'OK') {
                if (data.results.length > 1) {
                    obj.address = data.results[1].formatted_address;
                    //this.set('address', data.results[1].formatted_address);
                }
            }
            // For debugging
            log('revgeoModel parse', obj, data);
            return obj;
        }
    });

    return new ReverseGeocoderModel();
});