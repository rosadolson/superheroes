import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  image: {
    width: '50%'
  }
}

const HeroCard = ({ hero, deleteHero }) => {
  return (
    <div>
      <p>{hero.name}</p>
      <p>{hero.superPower}</p>
      <img style={styles.image} src={hero.img} />
      <p>{hero.universe}</p>
      <p>{hero.nemesis}</p>
      <button onClick={deleteHero}> DELETE </button>
    </div>
  )
}

HeroCard.propTypes = {
  hero: PropTypes.object.isRequired,
  deleteHero: PropTypes.func.isRequired
}

export default HeroCard
