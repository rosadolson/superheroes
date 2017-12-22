import React from 'react'

const styles = {
  lighTitles: {
    fontFamily: 'Candal, sans-serif',
    color: '#7f8c8d',
    margin: '0%',
    fontSize: '12px'
  },
  orangeTitles: {
    fontFamily: 'Candal, sans-serif',
    color: '#e74c3c',
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
  }
}

const CardSubtitle = ({ title, trait, orange }) => {
  return (
    <div>
      <p style={orange ? styles.orangeTitles : styles.lighTitles}>{title}</p>
      <p style={styles.traits}>{trait}</p>
    </div>
  )
}

CardSubtitle.defaultPropTypes = {
  orange: false
}

export default CardSubtitle
