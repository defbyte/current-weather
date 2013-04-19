// Weather Data
// Model of Forecast.io API's "data point" at a specific instant in time.

define([
    'backbone',
    'underscore'
],
function( Backbone, _ ) {

    var WeatherDataModel = Backbone.Model.extend({
        defaults: {
            time: false,
            summary: '',
            icon: '',
            sunriseTime: 0, // Only defined on Daily data points
            sunsetTime: 0, // Only defined on Daily data points
            precipIntensity: 0,
            precipIntensityMax: 0, // Only defined on Daily data points
            precipIntensityMaxTime: 0, // Only defined on Daily data points
            precipProbability: 0,
            precipType: '',
            precipAccumulation: 0, // Only defined on Daily data points
            temperature: 0, // NOT defined on Daily data points
            temperatureMin: 0, // Only defined on Daily data points
            temperatureMinTime: 0, // Only defined on Daily data points
            temperatureMax: 0, // Only defined on Daily data points
            temperatureMaxTime: 0, // Only defined on Daily data points
            windSpeed: 0,
            windBearing: 0,
            cloudCover: 0,
            humidity: 0,
            pressure: 0,
            visibility: 0
        }
    });

    return WeatherDataModel;

});