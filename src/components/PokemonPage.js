import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  constructor() {
    super()
    this.state = {
      allPokemon: [],
      typedSearch: ""
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(resp => resp.json())
    .then(fetchPokemon => 
      this.setState({allPokemon: fetchPokemon}))
  }
  render() {
    const desiredPokemon = this.state.allPokemon.filter(poke =>
      poke.name.includes(this.state.typedSearch)
    )
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit = {this.handleSubmit}/>
        <br />
        <Search typedSearch = {this.state.typedSearch} handleOnChange = {this.handleOnChange} />
        <br />
        <PokemonCollection desiredPokemon = {desiredPokemon} />
      </Container>
    )
  }
  handleOnChange = (event) => {
    this.setState({typedSearch: event.target.value})
  }
  handleSubmit = (PokemonObj) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: PokemonObj.name, sprites: {front: PokemonObj.frontUrl, back: PokemonObj.backUrl}, stats: [{value: PokemonObj.hp, name: "hp"}] })}
    fetch("http://localhost:3000/pokemon", requestOptions)
    .then(resp => resp.json())
    .then(newPokemon=> this.setState({allPokemon: [...this.state.allPokemon, newPokemon]}))
  }
}

export default PokemonPage
