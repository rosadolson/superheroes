import React from 'react'
import PropTypes from 'prop-types'

const VillainCard = ({ villain, deleteVillain }) => {
  return (
    <div>
      <h2>{villain.name}</h2>
      <button onClick={deleteVillain}>DELETE</button>
    </div>
  )
}

VillainCard.propTypes = {
  villain: PropTypes.object.isRequired,
  deleteVillain: PropTypes.func.isRequired
}

export default VillainCard
