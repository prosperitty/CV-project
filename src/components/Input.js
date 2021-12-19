// import { Component } from "react";
import React from 'react';

// export default class Input extends Component {
//   render() {
//     return (
//       <div className='input-container'>
//         <label htmlFor={this.props.inputName}>{this.props.inputName}</label>
//         <input type={this.props.inputType} name={this.props.inputName} value={this.props.info} onChange={this.props.handleInputs}/>
//       </div>
//     );
//   }
// }

const Input = props => {
  return (
    <div className="input-container">
      <label htmlFor={props.inputName}>{props.inputName}</label>
      <input
        type={props.inputType}
        name={props.inputName}
        value={props.info}
        onChange={props.handleInputs}
      />
    </div>
  );
};

export default Input;
