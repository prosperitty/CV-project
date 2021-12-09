import { Component } from "react";
import Input from "./Input";

export default class Experience extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div>
        <h2>{this.props.header}</h2>
        <Input inputType='text' inputName='company' handleInputs={this.props.handleInputs} />
        <Input inputType='text' inputName='position' handleInputs={this.props.handleInputs} />
        <div>
          <label htmlFor='jobDescription'>job description</label>
          <textarea name='jobDescription' handleInputs={this.props.handleInputs} />
        </div>
        <Input inputType='date' inputName='dateFrom' handleInputs={this.props.handleInputs} />
        <Input inputType='date' inputName='dateTo' handleInputs={this.props.handleInputs} />
      </div>
    );
  }
}