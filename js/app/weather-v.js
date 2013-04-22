/*
    Weather App
    Primary view.
    Displays current weather conditions.
*/

define([
    'jquery',
    'underscore',
    'backbone',
    './userlocation-m',
    './forecast-m'
],
function( $, _, Backbone, userLocationModel, forecastModel ) {

    var WeatherView = Backbone.View.extend({
        el: '#current-weather',

        initialize: function() {

            this.listenTo( userLocationModel, 'error', this.showError );
            this.listenTo( forecastModel, 'change', this.render );

        },

        render: function() {

            log('render current conditions', forecastModel);
            // Populate template with current conditions
            var html = '';
            this.tmpl = this.tmpl || _.template($("#current-tmpl").html());
            if( forecastModel.get('currently') ) {
                html = this.tmpl({
                    summary: forecastModel.get('currently').summary,
                    temperature: Math.round(forecastModel.get('currently').temperature)
                });
            }

            this.$el.html( html );

            return this;
        },

        showError: function(e, msg) {
            this.$el.html('<p class="error">' + msg + '</p>');
        }
    });

    return new WeatherView();
});