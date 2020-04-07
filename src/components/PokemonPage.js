import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      search: ""
    }
  }
  fetchPokemon() {
    fetch("http://localhost:3000/pokemon")
    .then(response => response.json())
    .then(p => this.setState({pokemon: p}))
  }

  fetchPokemonValue(value) {
    fetch("http://localhost:3000/pokemon")
    .then(response => response.json())
    .then(p => {
      this.setState({pokemon: p.filter(poke => poke.name.match(value))})})
      // this.setState({pokemon: p})})
  }

  componentDidMount() {
    // fetch("http://localhost:3000/pokemon")
    // .then(response => response.json())
    // .then(p => this.setState({pokemon: p}))
    this.fetchPokemon();
  }

  changeSearch(value) {
    // let newArr = this.state.pokemon.filter(p => p.name.match(value))
    // console.log(newArr)
    if (value === "") {
      this.fetchPokemon()
    } else {
      this.fetchPokemonValue(value)
    }
    this.setState({
      // pokemon: newArr,
      search: value
    })
  }

  addPokemon(name, front, back, hp){
    let newPoke = { name: name,
                    sprites: {front: front, back: back},
                    stats: [{name: "hp", value: hp}]
                  }
    // let oldPokemon = this.state.pokemon
    // oldPokemon.push(newPoke)
    let oldPokemon = this.state.pokemon.push(newPoke)
    this.setState({pokemon: oldPokemon})
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={(e) => this.changeSearch(e.target.value)} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
