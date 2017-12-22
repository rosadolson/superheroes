import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  button: {
    backgroundColor: 'gray',
    padding: '10px',
    margin: '3%',
    borderRadius: 15,
    fontFamily: 'Candal, sans-serif'
  }
}
const Button = ({ handleClick, children }) => {
  return (
    <button style={styles.button} onClick={handleClick}>{children}</button>
  )
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
}

export default Button
