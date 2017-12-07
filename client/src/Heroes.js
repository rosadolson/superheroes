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

const Heroes = () => 
  <div>
    <h3 style={styles.jumbotron}>Heroes</h3>
  </div>

export default Heroes
