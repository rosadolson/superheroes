import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

class EditHeroContainer extends Component {
  render () {
    return (
      <div>
        <h1>Ready to edit hero with id: {this.props.match.params.heroId}</h1>
      </div>
    )
  }
}

export default withRouter(EditHeroContainer)
