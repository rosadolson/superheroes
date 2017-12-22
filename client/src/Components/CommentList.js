import React from 'react'
import PropTypes from 'prop-types'

const CommentList = ({ comments }) => {
  return (
    <div>
      {
        comments && comments.length > 0
        ? comments.map((comment) => {
          return <p key={comment._id}>{comment.text}</p>
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
