var React = require('react');
var PokemonList = require('./PokemonList.jsx');
var request = require('superagent');

var PokemonListContainer = React.createClass({
	addPokemon: function(pokemon) {
		this.setState({
			pokemon: this.state.pokemon.concat([pokemon])
			//pokemon: this.state.pokemon.push(pokemon)
		})
	},
	/*
	getInitialState: function() {
		return {
			pokemon: [
				{name: 'Charmander', level: 1},
				{name: 'Bulbasaur', level: 1}
			]
		}
	},
	*/
	getInitialState: function() {
		return {
			pokemon: []
		}
	},

	componentDidMount: function() {
		request
			.get('/pokemon')
			.end(function(err, res) {
				this.setState({
					pokemon: this.state.pokemon.concat(res)
				})
			}).bind(this)
	},

	render: function() {
		return (
			<PokemonList addPokemon={this.addPokemon} pokemonList={this.state.pokemon} />
		)
	}
})

module.exports = PokemonListContainer;
