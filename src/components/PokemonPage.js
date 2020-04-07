import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state = {
      allPokemons: [],
      searchTerm: ""
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(response => response.json())
    .then(pokemonData => (
      this.setState({allPokemons: pokemonData})
    ))
  }

  searchPokemon = (event) => {
   this.setState({searchTerm: event.target.value})
  }

  addPokemon = () => {
    this.setState({
      allPokemons: [...this.state.allPokemons, ]
    })
  }

  render() {
    let filteredPokemon = this.state.allPokemons.filter(pokemon => pokemon.name.includes(this.state.searchTerm))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br /> 
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={this.searchPokemon} />
        <br />
        <PokemonCollection allPokemons={filteredPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
