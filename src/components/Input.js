import { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.inputName}>{this.props.inputName}</label>
        <input type={this.props.inputType} name={this.props.inputName} onChange={this.props.handleInputs}/>
      </div>        
    );
  }
}