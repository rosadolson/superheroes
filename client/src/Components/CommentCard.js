import React from 'react'

const styles = {
  container: {
    border: '1px solid gray',
    width: 375,
    paddingLeft: '3%',
    marginBottom: '5%',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px'
  }
}

const CommentCard = ({ comment }) => {
  return (
    <div style={styles.container}>
      <p>{comment.text}</p>
    </div>
  )
}

export default CommentCard
