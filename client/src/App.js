import React, {Component} from 'react'
import HeroesList from './Heroes/HeroesList'
import Home from './Home'
import NavBar from './Components/NavBar'
import $ from 'jquery'
import CreateHeroContainer from './Heroes/CreateHeroContainer'
import VillainsList from './Villains/VillainsList'
import CreateVillainContainer from './Villains/CreateVillainContainer'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  state = {
    heroes: undefined,
    villains: undefined
  }

  componentDidMount () {
    this.loadHeroesFromServer()
    this.loadVillainsFromServer()
  }

  loadHeroesFromServer = () => {
    $.ajax({
      url: '/api/heroes',
      method: 'GET'
    }).done((response) => {
      console.log(response)
      this.setState({ heroes: response.superHeroes })
    })
  }

  loadVillainsFromServer = () => {
    $.ajax({
      url: '/api/villains',
      method: 'GET'
    }).done((response) => {
      this.setState({ villains: response.villains })
    })
  }

  deleteHero = (hero) => {
    $.ajax({
      url: `/api/heroes/${hero._id}`,
      method: 'DELETE'
    }).done((response) => {
      this.loadHeroesFromServer()
    })
  }

  deleteVillain = (villain) => {
    $.ajax({
      url: `/api/villains/${villain._id}`,
      method: 'DELETE'
    }).done((response) => {
      this.loadVillainsFromServer()
    })
  }

  showUniqueHero = (hero) => {
    $.ajax({
      url: `/api/heroes/${hero._id}`,
      method: 'GET'
    }).done((response) => {
      console.log(response)
      const hero = response.hero
      alert(`${hero.name} has ${hero.superPower} as a super power, and is from ${hero.universe}. ${hero.name} hates ${hero.nemesis} more than anyone else in the world.`)
    })
  }

  showUniqueVillain = (villain) => {
    $.ajax({
      url: `/api/villains/${villain._id}`,
      method: 'GET'
    }).done((response) => {
      console.log(response)
      const villain = response.villain
      alert(`${villain.name} is from ${villain.universe} and hates ${villain.nemesis}.`)
    })
  }

  render () {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route path='/create-hero' render={() => <CreateHeroContainer loadHeroesFromServer={this.loadHeroesFromServer} />} />
          {
            this.state.heroes
            ? <Route path='/heroes' render={() =>  <HeroesList heroes={this.state.heroes} deleteHero={this.deleteHero} showUniqueHero={this.showUniqueHero} />} />
            : 'No Heroes'
          }
          <Route path='/create-villain' render={() => <CreateVillainContainer loadVillainsFromServer={this.loadVillainsFromServer} />} />
          {
            this.state.villains
            ? <Route path='/villains' render={() => <VillainsList villains={this.state.villains} deleteVillain={this.deleteVillain} showUniqueVillain={this.showUniqueVillain} />} />
            : 'No Villains'
          }
        </div>
      </Router>
    )
  }
}

export default App
