import React from 'react'

const styles = {
  topSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  image: {
    width: '80%'
  },
  name: {
    fontFamily: 'Candal, sans-serif',
    color: '#e74c3c',
    marginBottom: '4%',
    fontSize: '20px'
  }
}

const CardHeader = ({ name, img }) => {
  return (
    <div style={styles.topSection}>
      <h2 style={styles.name}>{name}</h2>
      <img style={styles.image} src={img} />
    </div>
  )
}

export default CardHeader
