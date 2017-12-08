import React from 'react'
import PropTypes from 'prop-types'

const CreateHeroForm = ({ onNameChange, onSuperPowerChange, onImageChange, onUniverseChange, onNemesisChange, handleSubmit }) => {
  return (
    <div>
      <h3>Create Hero</h3>
      <form>
        <div>
          <label>Name</label>
          <input type='text' onChange={onNameChange} />
        </div>
        <div>
          <label>Super Power</label>
          <input type='text' onChange={onSuperPowerChange} />
        </div>
        <div>
          <label>Image</label>
          <input type='text'onChange={onImageChange} />
        </div>
        <div>
          <label>Universe</label>
          <input type='text' onChange={onUniverseChange} />
        </div>
        <div>
          <label>Nemesis</label>
          <input type='text' onChange={onNemesisChange} />
        </div>
        <button onClick={handleSubmit}> SUBMIT </button>
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
