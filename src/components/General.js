import { Component } from "react";
import Input from "./Input";

export default class General extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div>
        <h2>{this.props.header}</h2>
        <Input inputType='text' inputName='name' handleInputs={this.props.handleInputs} />
        <Input inputType='text' inputName='email' handleInputs={this.props.handleInputs} />
        <Input inputType='text' inputName='phone' handleInputs={this.props.handleInputs} />
      </div>
    );
  }
}