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
        <Input inputType='text' inputName='name' />
        <Input inputType='text' inputName='email' />
        <Input inputType='text' inputName='phone' />
      </div>
    );
  }
}