import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import $ from 'jquery'
import VillainInfo from './VillainInfo'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center'
  }
}

class VillainContainer extends Component {
  state = {
    villain: undefined,
    comments: undefined,
    loading: true
  }

  componentDidMount () {
    const villainId = this.props.match.params.villainId
    this.loadVillain(villainId)
  }

  loadVillain = (id) => {
    $.ajax({
      url: `/api/villains/${id}`,
      method: 'GET'
    }).done((response) => {
      console.log(response)
      this.setState({
        villain: response.villain,
        loading: false,
        comments: response.villain.comments })
    })
  }

  render () {
    return (
      <div style={styles.container}>
        {
          !this.state.loading
          ? <VillainInfo villain={this.state.villain} comments={this.state.comments} />
          : 'Hero not available.'
        }
      </div>
    )
  }
}

export default withRouter(VillainContainer)

