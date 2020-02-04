import React from 'react';

// props:
//   id - passthrough
//   defaultValue - passthrough
export default function AcreageInput(props) {
  return (
    <input type="number"
      id={props.id}
      name={props.id}
      min="10" defaultValue={props.defaultValue}
      max="2000000" step="1"
    />
  )
}
