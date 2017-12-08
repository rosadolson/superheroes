import React from 'react'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: '3%',
    marginLeft: '5%',
    marginRight: '5%'
  },
  header: {
    fontFamily: 'Candal, sans-serif',
    color: '#e74c3c',
    marginBottom: '1%'
  },
  subHeader: {
    fontFamily: 'Roboto, sans-serif',
    color: '#2c3e50',
    marginTop: '0%'
  }
}

const Heroes = ({ heroes }) => {
  return (
    <div>
      <div style={styles.container}>
        <h2 style={styles.header}>Heroes.</h2>
        <h4 style={styles.subHeader}>This is where all the hero stuff is at.</h4>
      </div>
      <div>
        {
          heroes.map((hero, index) => {
            return <p key={index}>{hero.name}</p>
          })
        }
      </div>
    </div>
  )
}

export default Heroes
