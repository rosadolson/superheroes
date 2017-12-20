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
    alignContent: 'flex-end',
    padding: '2%'
  },
  button: {
    marginLeft: '20%',
    marginTop: '4%'
  }
}

const CreateVillainForm = ({ heroes, onNameChange, onImageChange, onUniverseChange, onNemesisChange, submitVillain }) => {
  return (
    <div style={styles.container}>
      <form>
        <div style={styles.section}>
          <label style={styles.titles}>Name: </label>
          <input style={styles.input} type='text' placeholder='Type Name Here' onChange={onNameChange} />
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
          <select onChange={onNemesisChange}>
            <option>Select Nemesis</option>
            {
              heroes.map((hero, index) => {
                return <option key={index} value={hero._id}>{hero.name}</option>
              })
            }
          </select>
        </div>
        <button style={styles.button} onClick={submitVillain}> SUBMIT </button>
      </form>
    </div>
  )
}

CreateVillainForm.propTypes = {
  onNameChange: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
  onUniverseChange: PropTypes.func.isRequired,
  onNemesisChange: PropTypes.func.isRequired,
  submitVillain: PropTypes.func.isRequired,
  heroes: PropTypes.array.isRequired
}

export default CreateVillainForm
