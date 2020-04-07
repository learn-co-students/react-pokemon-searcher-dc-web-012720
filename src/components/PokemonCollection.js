import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  renderPokemonCard(p) {
    return <PokemonCard pokemon={p} key={p.id}/>
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.pokemon.map(p => this.renderPokemonCard(p))}
      </Card.Group>
    )
  }
}

export default PokemonCollection
