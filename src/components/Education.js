import { Component } from "react";
import Input from "./Input";

export default class Education extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div>
        <h2>{this.props.header}</h2>
        <Input inputType='text' inputName='school' handleInputs={this.props.handleInputs} />
        <Input inputType='text' inputName='major' handleInputs={this.props.handleInputs} />
        <Input inputType='date' inputName='date' handleInputs={this.props.handleInputs} />
      </div>
    );
  }
}