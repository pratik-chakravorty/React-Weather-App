var React = require('react');


var WeatherMessage = (props) => {

	var {temp,location} = props;
	return (
			<h2 className="text-center">It's {temp}&#8451; in {location}</h2>
		)
}

module.exports = WeatherMessage