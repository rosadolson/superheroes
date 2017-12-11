import React, {Component} from 'react'
import $ from 'jquery'
import CreateVillainForm from './CreateVillainForm'
import {
  withRouter
} from 'react-router-dom'

class CreateVillainContainer extends Component {
  state ={
    name: undefined,
    img: undefined,
    universe: undefined,
    nemesis: undefined
  }

  onNameChange = (e) => this.setState({ name: e.target.value })

  onImageChange = (e) => this.setState({ img: e.target.value })

  onUniverseChange = (e) => this.setState({ universe: e.target.value })

  onNemesisChange = (e) => this.setState({ nemesis: e.target.value })

  submitVillain = (e) => {
    e.preventDefault()
    const {name, img, universe, nemesis} = this.state
    const villain = {name, img, universe, nemesis}
    $.ajax({ 
      url: '/api/villains',
      method: 'POST',
      data: villain
    }).done((response) => {
      this.props.loadVillainsFromServer()
      this.props.history.push('/villains')
    })
  }

  render () {
    return (
      <div>
        <h2>Create A Villain.</h2>
        <h4>Add a new villain to the list.</h4>
        <CreateVillainForm
          onNameChange={this.onNameChange}
          onImageChange={this.onImageChange}
          onUniverseChange={this.onUniverseChange}
          onNemesisChange={this.onNemesisChange}
          submitVillain={this.submitVillain}
        />
      </div>
    )
  }
}

export default withRouter(CreateVillainContainer)

