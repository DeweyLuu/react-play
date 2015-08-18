var React = require('react');
var Pokemon = require('./Pokemon.jsx')

var PokemonList = React.createClass({
	getInitialState: function() {
		return {
			newPokemon: ''
		}
	},

	updateNewPokemon: function(e) {
		this.setState({
			newPokemon: e.target.value
		})
	},

	handleNewPokemon: function() {
		var pokemon = {name: this.state.newPokemon, level: 1}
		this.props.addPokemon(pokemon)
		//post request?
	},

	render: function() {
		var ourPokemon = this.props.pokemonList.map(function(pokemon) {
			return <Pokemon pokemon={pokemon} />
		})

		//this.props.addPokemon({name: 'ratatat', level: 9001})
		//no no! infinite loop

		return (
			<section>
				<h2>Current Pokemon</h2>
				<h2> What im typing: {this.state.newPokemon}</h2>
				<ul>
					{ourPokemon}
				</ul>
				<input type='text' value={this.state.newPokemon} onChange={this.updateNewPokemon} />
				<button onClick={this.handleNewPokemon}>Add Pokemon</button>

		 	</section>
		)
	}
})

module.exports = PokemonList;
