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
        <Input inputType='text' inputName='company' />
        <Input inputType='text' inputName='position' />
        <div>
          <label htmlFor='jobDescription'>job description</label>
          <textarea name='jobDescription'/>
        </div>
        <Input inputType='text' inputName='dateFrom' />
        <Input inputType='text' inputName='dateTo' />
      </div>
    );
  }
}