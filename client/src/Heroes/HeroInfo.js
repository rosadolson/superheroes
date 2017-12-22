import React from 'react'
import PropTypes from 'prop-types'
import CommentList from '../Components/CommentList'
import CommentForm from '../Components/CommentForm'

const styles = {
  container: {
    border: '1px solid gray',
    width: '50%',
    marginTop: '3%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  image: {
    width: '75%',
    border: '1px solid gray'
  },
  nemesis: {
    backgroundColor: '#bdc3c7',
    padding: '3%'
  },
  textBox: {
    resize: 'none',
    width: 300
  }
}

const HeroInfo = ({ text, hero, comments, handleTextChange, submitComment  }) => {
  return (
    <div style={styles.container}>
      <h3>{hero.name}</h3>
      <img style={styles.image} src={hero.img} />
      <p>Super Power: {hero.superPower}</p>
      <p>Universe: {hero.universe}</p>
      {
        hero.nemesis
        ? (
          <div style={styles.nemesis}>
            <h3>Nemesis:</h3>
            <p>{hero.nemesis.name}</p>
            <img src={hero.nemesis.img} />
          </div>
        )
        : 'No Nemesis'
      }
      <h2>Comments:</h2>
      <CommentList comments={comments} />
      <CommentForm
        text={text}
        handleTextChange={handleTextChange}
        submitComment={submitComment}
        />
    </div>
  )
}

HeroInfo.propTypes = {
  hero: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  submitComment: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default HeroInfo
