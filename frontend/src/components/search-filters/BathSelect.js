import React from 'react';

// props:
//   id - passthrough
//   defaultValue - passthrough
export default function BathSelect(props) {
  return (
    <select name={props.id} id={props.id}
      min="0" max="6" step="0.5"
      defaultValue={props.defaultValue}
    >
      <option>.5</option>
      <option>1</option>
      <option>1.5</option>
      <option>2</option>
      <option>2.5</option>
      <option>3</option>
      <option>3.5</option>
      <option>4</option>
      <option>4.5</option>
      <option>5</option>
      <option>5.5</option>
      <option>6</option>
    </select>
  )
}
