var React = require('react');

var Pokemon = React.createClass({
	render: function() {
		return (
			<li>
				<h2>Name: {this.props.pokemon.name}</h2>
				<p>Level: {this.props.pokemon.level}</p>
			</li>
		)
	}
})

module.exports = Pokemon;
