var React = require('react');
var Pokemon = require('./Pokemon.jsx')

var PokemonList = React.createClass({
	render: function() {
		var ourPokemon = this.props.pokemonList.map(function(pokemon) {
			return <Pokemon pokemon={pokemon} />
		})
		return (
			<section>
				<h2>Current Pokemon</h2>
				<ul>
					{ourPokemon}
				</ul>
		 	</section>
		)
	}
})

module.exports = PokemonList;
