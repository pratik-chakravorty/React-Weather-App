var React = require('react');


var WeatherMessage = (props) => {

	var {temp,location} = props;
	return (
			<h2>It's {temp}&#8451; in {location}</h2>
		)
}

module.exports = WeatherMessage