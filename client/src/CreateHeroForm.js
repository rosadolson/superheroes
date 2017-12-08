import React from 'react'
import PropTypes from 'prop-types'

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
    alignContent: 'flex-end'
  },
  button: {
    marginLeft: '20%',
    marginTop: '4%'
  }
}

const CreateHeroForm = ({ onNameChange, onSuperPowerChange, onImageChange, onUniverseChange, onNemesisChange, handleSubmit }) => {
  return (
    <div style={styles.container}>
      <form>
        <div style={styles.section}>
          <label style={styles.titles}>Name: </label>
          <input style={styles.input} type='text' placeholder='Type Name Here' onChange={onNameChange} />
        </div>
        <div style={styles.section}>
          <label style={styles.titles}>Super Power: </label>
          <input style={styles.input} type='text' placeholder='Type Super Power Here' onChange={onSuperPowerChange} />
        </div>
        <div style={styles.section}>
          <label style={styles.titles}>Image: </label>
          <input style={styles.input} type='text' placeholder='Type Image URL Here' onChange={onImageChange} />
        </div>
        <div style={styles.section}>
          <label style={styles.titles}>Universe: </label>
          <input style={styles.input} type='text' placeholder='Type Universe Here' onChange={onUniverseChange} />
        </div>
        <div style={styles.section}>
          <label style={styles.titles}>Nemesis: </label>
          <input style={styles.input} type='text' placeholder='Type Nemesis Here' onChange={onNemesisChange} />
        </div>
        <button style={styles.button} onClick={handleSubmit}> SUBMIT </button>
      </form>
    </div>
  )
}

CreateHeroForm.propTypes = {
  onNameChange: PropTypes.func.isRequired,
  onSuperPowerChange: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
  onUniverseChange: PropTypes.func.isRequired,
  onNemesisChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default CreateHeroForm
