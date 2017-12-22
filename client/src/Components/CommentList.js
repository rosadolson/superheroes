import React from 'react'
import PropTypes from 'prop-types'
import CommentCard from './CommentCard'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

const CommentList = ({ comments }) => {
  return (
    <div style={styles.container}>
      {
        comments && comments.length > 0
        ? comments.map((comment, index) => {
          return <CommentCard key={index} comment={comment} />
        })
        : 'No Comments'
      }
    </div>
  )
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentList
