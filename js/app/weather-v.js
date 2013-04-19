// Weather App
// View of current weather conditions.

define([
    'jquery',
    'underscore',
    'backbone',
    './weather-m',
    './reversegeocoder-m'
],
function( $, _, Backbone, weatherModel, revgeoModel ) {

    var WeatherView = Backbone.View.extend({
        el: '#current-weather',

        initialize: function() {

            this.listenTo( weatherModel, 'change', this.render );
            this.listenTo( revgeoModel, 'change', this.updateLocation );

        },

        render: function() {

            log('render current conditions');
            // Populate template with current conditions
            var html = '';
            this.tmpl = this.tmpl || _.template($("#current-tmpl").html());
            html = this.tmpl({
                summary: weatherModel.get('currently').summary,
                temperature: Math.round(weatherModel.get('currently').temperature)
            });
            this.$el.html( html );

            // Now that we have weather, get human readable location information
            revgeoModel.fetch({
                dataType: 'json',
                data: {
                    latlng: weatherModel.get('latitude') + ',' + weatherModel.get('longitude'),
                    sensor: false
                }
            });

            return this;
        },

        updateLocation: function() {
            log('updateLocation');
            this.$el.append('<p>' + revgeoModel.get('address') + '</p>');
        },

        showError: function(error) {
            this.$el.html('<p class="error">' + error + '</p>');
        }
    });

    return new WeatherView();
});