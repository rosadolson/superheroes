import React from 'react'
import VillainCard from './VillainCard'
import PropTypes from 'prop-types'

const VillainsList = ({ villains, deleteVillain }) => {
  return (
    <div>
      <h2>Villains.</h2>
      <h4>This is where all the bad guys are.</h4>
      {
        villains.map((villain, index) => {
          return <VillainCard
            villain={villain}
            key={index}
            deleteVillain={() => deleteVillain(villain)}
          />
        })
      }
    </div>
  )
}

VillainsList.propTypes = {
  villains: PropTypes.array.isRequired,
  deleteHero: PropTypes.func.isRequired
}

export default VillainsList
