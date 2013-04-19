// Weather App
// View for the search form

define([
    'jquery',
    'underscore',
    'backbone',
    './weather-m'
],
function( $, _, Backbone, weatherModel ) {

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
            weatherModel.set(
                {
                    'latitude': this.$lat.val(),
                    'longitude': this.$lng.val()
                },
                {silent: true}
            );
            weatherModel.fetch({
                dataType: 'jsonp'
            });
        }
    });

    return new SearchView();
});