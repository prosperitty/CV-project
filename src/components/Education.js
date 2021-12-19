// import { Component } from "react";
import React from 'react';
import Input from './Input';

// export default class Education extends Component {
//   render() {
//     return (
//       <div className='cv-section'>
//         <h3>{this.props.header}</h3>
//         <Input inputType='text' inputName='school' info={this.props.applicationInfo.school} handleInputs={this.props.handleInputs} />
//         <Input inputType='text' inputName='major' info={this.props.applicationInfo.major} handleInputs={this.props.handleInputs} />
//         <Input inputType='date' inputName='date' handleInputs={this.props.handleInputs} />
//       </div>
//     );
//   }
// }

const Education = (props) => {
  return (
    <div className="cv-section">
      <h3>{props.header}</h3>
      <Input
        inputType="text"
        inputName="school"
        info={props.applicationInfo.school}
        handleInputs={props.handleInputs}
      />
      <Input
        inputType="text"
        inputName="major"
        info={props.applicationInfo.major}
        handleInputs={props.handleInputs}
      />
      <Input
        inputType="date"
        inputName="date"
        handleInputs={props.handleInputs}
      />
    </div>
  );
};

export default Education;
