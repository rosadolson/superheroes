import React from 'react'

const styles = {
  jumbotron: {
    backgroundColor: 'gray',
    padding: '5%',
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  }
}

const Home = () =>
  <div>
    <h3 style={styles.jumbotron}>Home</h3>
  </div>

export default Home
