import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    }
  }

  render() {
    return (
      <Card>
        <div onClick={() => this.setState({clicked: !this.state.clicked})}>
          <div className="image">
          {this.state.clicked ? (<img alt="oh no!" src={this.props.pokemon.sprites.back}/>) : (<img alt="oh no!" src={this.props.pokemon.sprites.front}/>)}
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name.charAt(0).toUpperCase() + this.props.pokemon.name.slice(1)}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(s => s.name === "hp").value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
