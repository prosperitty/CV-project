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
          <textarea name='jobDescription' value={this.props.applicationInfo.jobDescription} onChange={this.props.handleInputs} />
        </div>
        <Input inputType='date' inputName='dateFrom' handleInputs={this.props.handleInputs} />
        <Input inputType='date' inputName='dateTo' handleInputs={this.props.handleInputs} />
      </div>
    );
  }
}