import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    border: '1px solid gray',
    width: '50%',
    marginTop: '3%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  image: {
    width: '75%',
    border: '1px solid gray'
  },
  nemesis: {
    backgroundColor: '#bdc3c7',
    padding: '3%'
  }
}

const VillainInfo = ({ villain }) => {
  return (
    <div style={styles.container}>
      <h3>{villain.name}</h3>
      <img style={styles.image} src={villain.img} />
      <p>Universe: {villain.universe}</p>
      {
        villain.nemesis
        ? (
          <div style={styles.nemesis}>
            <h3>Nemesis:</h3>
            <p>{villain.nemesis.name}</p>
            <img src={villain.nemesis.img} />
          </div>
        )
        : 'No Nemesis'
      }
    </div>
  )
}

VillainInfo.propTypes = {
  villain: PropTypes.object.isRequired
}

export default VillainInfo