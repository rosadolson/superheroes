import React from 'react'
import PropTypes from 'prop-types'
import CommentList from '../Components/CommentList'

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

const HeroInfo = ({ hero, comments }) => {
  return (
    <div style={styles.container}>
      <h3>{hero.name}</h3>
      <img style={styles.image} src={hero.img} />
      <p>Super Power: {hero.superPower}</p>
      <p>Universe: {hero.universe}</p>
      {
        hero.nemesis
        ? (
          <div style={styles.nemesis}>
            <h3>Nemesis:</h3>
            <p>{hero.nemesis.name}</p>
            <img src={hero.nemesis.img} />
          </div>
        )
        : 'No Nemesis'
      }
      <h2>Comments:</h2>
      <CommentList comments={comments} />
    </div>
  )
}

HeroInfo.propTypes = {
  hero: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired
}

export default HeroInfo
