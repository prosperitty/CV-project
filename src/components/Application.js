import { Component } from "react";

export default class Application extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div>
        <div>
          <p>{this.props.applicationInfo.name}</p>
          <p>{this.props.applicationInfo.email}</p>
          <p>{this.props.applicationInfo.phone}</p>
        </div>
        <div>
          <p>{this.props.applicationInfo.school}</p>
          <p>{this.props.applicationInfo.major}</p>
          <p>{this.props.applicationInfo.date}</p>
        </div>
        <div>
          <p>{this.props.applicationInfo.company}</p>
          <p>{this.props.applicationInfo.position}</p>
          <p>{this.props.applicationInfo.jobDescription}</p>
          <p>{this.props.applicationInfo.dateFrom}</p>
          <p>{this.props.applicationInfo.dateTo}</p>
        </div>
        <button type='button' onClick={this.props.handleEdit}>edit</button>
      </div>
    );
  }
}