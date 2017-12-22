import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import CardHeader from '../Components/CardHeader'
import CardSubtitle from '../Components/CardSubtitle'

const styles = {
  container: {
    width: '25vw',
    marginTop: '5%',
    marginLeft: '2%',
    marginRight: '2%',
    marginBottom: '2%',
    paddingBottom: '1%',
    backgroundColor: '#34495e'
  },
  bottomSection: {
    borderTop: '1px solid #ecf0f1',
    marginLeft: '10%',
    marginRight: '10%',
    paddingTop: '3%',
    paddingLeft: '7%',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column'
  },
  buttonSection: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '3%',
    marginBottom: '3%'
  },
  button: {
    border: 'none'
  },
  linkSection: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: '3%',
    marginTop: '3%',
    marginBottom: '3%',
    marginLeft: '10%',
    marginRight: '10%',
    borderTop: '1px solid #ecf0f1',
    fontFamily: 'Roboto, sans-serif'
  },
  link: {
    textDecoration: 'none',
    color: '#ecf0f1',
  }
}

const HeroCard = ({ hero, deleteHero, showUniqueHero }) => {
  return (
    <div style={styles.container}>
      <CardHeader name={hero.name} img={hero.img} />

      <div style={styles.buttonSection}>
        <button style={styles.button} onClick={() => showUniqueHero(hero)}> MORE INFO </button>
        <button style={styles.button} onClick={() => deleteHero(hero)}> DELETE </button>
      </div>

      <div style={styles.linkSection}>
        <Link style={styles.link} to={`/hero/${hero._id}`}>View Info</Link>
        <Link style={styles.link} to={`/edit-hero/${hero._id}`}>Edit Hero</Link>
      </div>

      <div style={styles.bottomSection}>
        <CardSubtitle orange title={'Super Power:'} trait={hero.superPower} />
        <CardSubtitle orange title={'Universe:'} trait={hero.universe} />
        <CardSubtitle orange title={'Nemesis:'} trait={hero.nemesis ? hero.nemesis.name : 'No Nemesis'} />
      </div>
    </div>
  )
}

HeroCard.propTypes = {
  hero: PropTypes.object.isRequired,
  deleteHero: PropTypes.func.isRequired,
  showUniqueHero: PropTypes.func.isRequired
}

export default HeroCard
