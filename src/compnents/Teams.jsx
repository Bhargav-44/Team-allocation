import React from 'react'

const Teams = ({selectedTeam, handleTeamSelectChange}) => {
  return (
    <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectChange}>
                <option value="TeamA">TeamA</option>
                <option value="TeamB">TeamB</option>
                <option value="TeamC">TeamC</option>
                <option value="TeamD">TeamD</option>
              </select>
  )
}

export default Teams
