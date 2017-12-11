import React from 'react'
import PropTypes from 'prop-types'

const CreateVillainForm = ({ onNameChange, onImageChange, onUniverseChange, onNemesisChange, submitVillain }) => {
  return (
    <form>
      <div>
        <label>Name: </label>
        <input type='text' placeholder='Type Name Here' onChange={onNameChange} />
      </div>
      <div>
        <label>Image: </label>
        <input type='text' placeholder='Type Image URL Here' onChange={onImageChange} />
      </div>
      <div>
        <label>Universe: </label>
        <input type='text' placeholder='Type Universe Here' onChange={onUniverseChange} />
      </div>
      <div>
        <label>Nemesis: </label>
        <input type='text' placeholder='Type Nemesis Here' onChange={onNemesisChange} />
      </div>
      <button onClick={submitVillain}> SUBMIT </button>
    </form>
  )
}

CreateVillainForm.propTypes = {
  onNameChange: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
  onUniverseChange: PropTypes.func.isRequired,
  onNemesisChange: PropTypes.func.isRequired,
  submitVillain: PropTypes.func.isRequired
}

export default CreateVillainForm
