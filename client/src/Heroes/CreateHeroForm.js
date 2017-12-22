import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Components/Button'

const styles = {
  container: {
    backgroundColor: '#34495e',
    margin: '5%',
    padding: '5%',
    width: '60%',
    display: 'flex',
    flexDirection: 'column'
  },
  section: {
    padding: '2%'
  },
  titles: {
    fontFamily: 'Candal, sans-serif',
    color: '#e74c3c'
  },
  input: {
    width: '50%',
    display: 'flex',
    alignContent: 'flex-end',
    padding: '2%'
  }
}

const CreateHeroForm = ({ villains, onChangeHandler, handleSubmit }) => {
  return (
    <div style={styles.container}>
      <form>
        <div style={styles.section}>
          <label style={styles.titles}>Name: </label>
          <input style={styles.input} id='name' type='text' placeholder='Type Name Here' onChange={onChangeHandler} />
        </div>
        <div style={styles.section}>
          <label style={styles.titles}>Super Power: </label>
          <input style={styles.input} id='superPower' type='text' placeholder='Type Super Power Here' onChange={onChangeHandler} />
        </div>
        <div style={styles.section}>
          <label style={styles.titles}>Image: </label>
          <input style={styles.input} id='img' type='text' placeholder='Type Image URL Here' onChange={onChangeHandler} />
        </div>
        <div style={styles.section}>
          <label style={styles.titles}>Universe: </label>
          <input style={styles.input} id='universe' type='text' placeholder='Type Universe Here' onChange={onChangeHandler} />
        </div>
        <div style={styles.section}>
          <label style={styles.titles}>Nemesis: </label>
          <select id='nemesis' onChange={onChangeHandler}>
            <option>Select Nemesis</option>
            {
              villains.map((villain, index )=> {
                return <option key={index} value={villain._id}>{villain.name}</option>
              })
            }
          </select>
        </div>
        <Button handleClick={handleSubmit}>SUBMIT</Button>
      </form>
    </div>
  )
}

CreateHeroForm.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  villains: PropTypes.array.isRequired
}

export default CreateHeroForm
