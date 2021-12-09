import { Component } from "react";
import Input from "./Input";

export default class Experience extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div className='cv-section'>
        <h3>{this.props.header}</h3>
        <Input inputType='text' inputName='company' info={this.props.applicationInfo.company} handleInputs={this.props.handleInputs} />
        <Input inputType='text' inputName='position' info={this.props.applicationInfo.position} handleInputs={this.props.handleInputs} />
        <div className='input-container'>
          <label htmlFor='jobDescription'>job description</label>
          <textarea name='jobDescription' info={this.props.applicationInfo.jobDescription} handleInputs={this.props.handleInputs} />
        </div>
        <Input inputType='date' inputName='dateFrom' info={this.props.applicationInfo.dateFrom} handleInputs={this.props.handleInputs} />
        <Input inputType='date' inputName='dateTo' info={this.props.applicationInfo.dateTo} handleInputs={this.props.handleInputs} />
      </div>
    );
  }
}