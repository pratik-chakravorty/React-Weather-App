var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&APPID=a206bc1546b86ebf768a24342df82e18&units=metric';

//a206bc1546b86ebf768a24342df82e18 

module.exports = {
	getTemp: function(location){
		var encodedLocation = encodeURIComponent(location);
		var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestURL).then(function(res){
			
			
			if(res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		},function(res){
			throw new Error('Error:- City not found')
		})
	}
}