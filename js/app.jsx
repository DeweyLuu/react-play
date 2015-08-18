var React = require('react');

var Header = require('./components/Header.jsx');
var PokemonListContainer = require('./components/PokemonListContainer.jsx');
var Pokemon = require('./components/Pokemon.jsx');
var PokemonList = require('./components/PokemonList.jsx');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Hello again!</h1>
				<PokemonListContainer/>
				<Header/>
				<p>{this.props.appName}</p>
			</div>
		)
	}
});

React.render(<App appName='My Cool React App' />, document.body);
