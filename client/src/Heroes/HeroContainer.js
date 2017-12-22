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
    comments: undefined,
    text: undefined
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

  submitComment = (e) => {
    e.preventDefault()
    const newComment = {text: this.state.text}
    $.ajax({
      url: `/api/heroes/${this.props.match.params.heroId}/comments`,
      method: 'POST',
      data: newComment
    }).done((response) => {
      this.loadHero(this.props.match.params.heroId)
      this.setState({ text: '' })
    })
  }

  handleTextChange = (e) => this.setState({ text: e.target.value })

  render () {
    return (
      <div style={styles.container}>
        {
          this.state.hero
          ? <HeroInfo
            hero={this.state.hero}
            handleTextChange={this.handleTextChange}
            submitComment={this.submitComment}
            comments={this.state.comments}
            text={this.state.text}
          />
          : 'Hero not available.'
        }
      </div>
    )
  }
}

export default withRouter(HeroContainer)

