import React from 'react'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

function DateFilter(props) {
  return (
    <ToggleButtonGroup
      value={props.value}
      onChange={props.dateFilter}
      name="dateFilter"
    >
      <ToggleButton value={1}>1m</ToggleButton>
      <ToggleButton value={3}>3m</ToggleButton>
      <ToggleButton value={6}>6m</ToggleButton>
    </ToggleButtonGroup>
  );
}	

export default DateFilter