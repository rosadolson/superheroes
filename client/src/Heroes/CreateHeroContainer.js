import React, {Component} from 'react'
import $ from 'jquery'
import CreateHeroForm from './CreateHeroForm'
import {
  withRouter
} from 'react-router-dom'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: '3%',
    marginLeft: '5%',
    marginRight: '5%'
  },
  header: {
    fontFamily: 'Candal, sans-serif',
    color: '#e74c3c',
    marginBottom: '1%'
  },
  subHeader: {
    fontFamily: 'Roboto, sans-serif',
    color: '#2c3e50',
    marginTop: '0%'
  },
  formSection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#2c3e50',
    borderRadius: '2px'
  }
}

class CreateHeroContainer extends Component {
  state = {
    name: undefined,
    superPower: undefined,
    img: undefined,
    universe: undefined,
    nemesis: undefined
  }

  onChangeHandler = (e) => this.setState({ [e.target.id]: e.target.value })

  handleSubmit = (e) => {
    e.preventDefault()
    const {name, superPower, img, universe, nemesis} = this.state
    const hero = {name, superPower, img, universe, nemesis}
    $.ajax({
      url: '/api/heroes',
      method: 'POST',
      data: hero
    }).done((response) => {
      this.props.loadHeroesFromServer()
      this.props.history.push('/heroes')
    })
  }

  render() {
    return (
      <div>
        <div style={styles.container}>
          <h2 style={styles.header}>Create A Hero.</h2>
          <h4 style={styles.subHeader}>Add a new hero to the list.</h4>
        </div>
        <div style={styles.formSection}>
        <CreateHeroForm 
          onChangeHandler={this.onChangeHandler}
          handleSubmit={this.handleSubmit}
          villains={this.props.villains}
        />
        </div>
      </div>
    )
  }
}

export default withRouter(CreateHeroContainer)
