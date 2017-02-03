var React = require('react');



var About = (props) => {
	return (
			<div>
				<h1 className="text-center">About</h1>
				<p>This is a weather application that I made to learn and understand React</p>
				<p><a href='https://facebook.github.io/react' target='_blank'>React</a> is a front-end library made by Facebook for creating
				user-interfaces.
				</p>
				<p>I have also used <a href='http://openweathermap.org' target='_blank'>openweathermap</a> to search
				   for weather data by city name
				</p>

			</div>
		)
};


module.exports = About;