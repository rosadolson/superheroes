import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  textArea: {
    width: 300
  },
  button: {
    padding: '10px',
    margin: '3%',
    borderRadius: '5px',
    fontFamily: 'Candal, sans-serif',
    color: '#e74c3c',
  }
}

const CommentForm = ({ text, handleTextChange, submitComment}) => {
  return (
    <form style={styles.container}>
      <textarea style={styles.textArea} value={text} onChange={handleTextChange} rows='5' placeholder='Enter A Comment' />
      <button style={styles.button} onClick={submitComment} type='button'>Comment</button>
    </form>
  )
}

CommentForm.propTypes = {
  text: PropTypes.string.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  submitComment: PropTypes.func.isRequired
}

export default CommentForm
