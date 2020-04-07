import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(){
    super()
    this.state = {
      clicked: false
    }
  }
  
  renderStats = () => {
    return this.props.pokemonObj.stats.find(stat => stat.name === "hp").value
   }

   clickedFn = () => {
     this.setState({
       clicked: !this.state.clicked
     })
   }


  render() {
    return (
      <Card>
        <div onClick={this.clickedFn}>
          <div className="image">
            { this.state.clicked ? 
            <img alt="oh no!" src={this.props.pokemonObj.sprites.back}/> 
            : <img alt="oh no!" src={this.props.pokemonObj.sprites.front}/> 
            }
          </div>
          <div className="content">
            <div className="header">{this.props.pokemonObj.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.renderStats()}hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
