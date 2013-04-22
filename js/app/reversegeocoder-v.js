/*
    Weather App
    View of reverse geocoded information.
*/

define([
    'jquery',
    'underscore',
    'backbone',
    './reversegeocoder-m'
],
function( $, _, Backbone, revgeoModel ) {

    var RevgeoView = Backbone.View.extend({
        el: '#location',

        initialize: function() {
            this.listenTo( revgeoModel, 'change', this.render );
        },

        render: function() {

            log('render location', revgeoModel);
            this.$el.html( '<p>' + revgeoModel.get('address') + '</p>' );

            return this;
        }
    });

    return new RevgeoView();
});