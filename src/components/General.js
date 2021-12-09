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
        <Input inputType='text' inputName='name' info={this.props.applicationInfo.name} handleInputs={this.props.handleInputs} />
        <Input inputType='text' inputName='email' info={this.props.applicationInfo.email} handleInputs={this.props.handleInputs} />
        <Input inputType='text' inputName='phone' info={this.props.applicationInfo.phone} handleInputs={this.props.handleInputs} />
      </div>
    );
  }
}