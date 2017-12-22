import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import $ from 'jquery'
import HeroInfo from './HeroInfo'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center'
  }
}

class HeroContainer extends Component {
  state = {
    hero: undefined,
    comments: undefined
  }

  componentDidMount () {
    const heroId = this.props.match.params.heroId
    this.loadHero(heroId)
  }

  loadHero = (id) => {
    $.ajax({
      url: `/api/heroes/${id}`,
      method: 'GET'
    }).done((response) => {
      console.log(response)
      this.setState({ hero: response.hero, comments: response.hero.comments })
    })
  }

  render () {
    return (
      <div style={styles.container}>
        {
          this.state.hero
          ? <HeroInfo hero={this.state.hero} comments={this.state.comments} />
          : 'Hero not available.'
        }
      </div>
    )
  }
}

export default withRouter(HeroContainer)

