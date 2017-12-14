import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

class EditVillainContainer extends Component {
  render () {
    return (
      <div>
        <h1>Ready to edit villain with id: {this.props.match.params.villainId}</h1>
      </div>
    )
  }
}

export default withRouter(EditVillainContainer)
