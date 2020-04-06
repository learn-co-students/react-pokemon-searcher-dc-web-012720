import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
 
  constructor() {
    super()
    this.state = {
      side: "front"
    }
  }
  render() {
    const stats = this.props.pokemon.stats
    const hp = stats.find(stat => stat.name === "hp").value
    return (
      <Card>
        <div>
          <div className="image">
            <img src = {this.props.pokemon.sprites[this.state.side]} alt="pokemon" onClick = {this.handleClick} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }

  handleClick = () => {
    if (this.state.side === "front") {
      this.setState({side: "back"})
      } else {
        this.setState({side: "front"})
      }
    
  }
}

export default PokemonCard
