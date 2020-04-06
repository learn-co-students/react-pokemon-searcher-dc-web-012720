import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleOnChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  clearForm = () => {
    this.setState({name: '', hp: '', frontUrl: '', backUrl: ''})
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={() => {this.props.handleSubmit({name: this.state.name, hp: this.state.hp, frontUrl: this.state.frontUrl, backUrl: this.state.backUrl})
      this.clearForm()}}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value = {this.state.name} onChange = {this.handleOnChange} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value = {this.state.hp} onChange = {this.handleOnChange} />
            <Form.Input fluid label="Front Image URL" placeholder="url" value = {this.state.frontUrl} name="frontUrl" onChange = {this.handleOnChange}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" value = {this.state.backUrl} name="backUrl" onChange = {this.handleOnChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
