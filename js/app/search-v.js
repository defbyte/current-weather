/*
    Weather App
    Search Form - requires latitude and longitude values.
*/

define([
    'jquery',
    'underscore',
    'backbone',
    './userlocation-m'
],
function( $, _, Backbone, userLocationModel ) {

    var SearchView = Backbone.View.extend({
        el: '#get-current-weather',

        events: {
            'click .search': 'search'
        },

        initialize: function() {

            this.$msg = this.$( '.message' );
            this.$lat = this.$( 'input[name="lat"]' );
            this.$lng = this.$( 'input[name="lng"]' );

        },

        search: function(e) {
            e.preventDefault();
            userLocationModel.updateLocation({
                latitude: this.$lat.val(),
                longitude: this.$lng.val()
            });
        }
    });

    return new SearchView();
});