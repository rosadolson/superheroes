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
    backgroundColor: '#34495e',
  },
  topSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: '80%'
  },
  name: {
    fontFamily: 'Candal, sans-serif',
    color: '#7f8c8d',
    marginBottom: '4%',
    fontSize: '20px'
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
  titles: {
    fontFamily: 'Candal, sans-serif',
    color: '#7f8c8d',
    margin: '0%',
    fontSize: '12px'
  },
  traits: {
    margin: '0%',
    paddingTop: '1%',
    paddingBottom: '2%',
    fontFamily: 'Roboto, sans-serif',
    color: '#ecf0f1',
    fontSize: '12px'
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

const VillainCard = ({ villain, deleteVillain, showUniqueVillain }) => {
  return (
    <div style={styles.container}>

      <CardHeader name={villain.name} img={villain.img} />

      <div style={styles.buttonSection}>
        <button style={styles.button} onClick={() => showUniqueVillain(villain)}>MORE INFO</button>
        <button style={styles.button} onClick={() => deleteVillain(villain)}>DELETE</button>
      </div>

      <div style={styles.linkSection}>
        <Link style={styles.link} to={`/villain/${villain._id}`}>View Info</Link>
        <Link style={styles.link} to={`/edit-villain/${villain._id}`}>Edit Villain</Link>
      </div>
      
      <div style={styles.bottomSection}>
        <CardSubtitle title={'Universe:'} trait={villain.universe} />
        <p style={styles.titles}>Nemesis:</p>
        <p style={styles.traits}>{villain.nemesis ? villain.nemesis.name : 'No Nemesis'}</p>
      </div>
    </div>
  )
}

VillainCard.propTypes = {
  villain: PropTypes.object.isRequired,
  deleteVillain: PropTypes.func.isRequired,
  showUniqueVillain: PropTypes.func.isRequired
}

export default VillainCard
