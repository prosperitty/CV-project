import { Component } from "react";

export default class Application extends Component {
  render() {
    return (
      <div className='application'>
        <div className='application-personal'>
          <h1 className='info-name'>{this.props.applicationInfo.name}</h1>
          <p className='container-email-phone'>
            <span className='info-email'>{this.props.applicationInfo.email}</span>
            <span className='info-phone'>{this.props.applicationInfo.phone}</span>
          </p>
        </div>
        <h4 className='application-title'>education</h4>
        <div className='application-education'>
          <h4 className='info-school'>{this.props.applicationInfo.school}</h4>
          <div className='container-major-date'>
            <span className='info-major'>{this.props.applicationInfo.major}</span>
            <span className='info-school-date'>{this.props.applicationInfo.date}</span>
          </div>
        </div>
        <h4 className='application-title'>experience</h4>
        <div className='application-experience'>
          <h4 className='info-company'>{this.props.applicationInfo.company}</h4>
          <div className='container-position-date'>
            <span className='info-position'>{this.props.applicationInfo.position}</span>
            <div>
              <span className='info-date-from'>{this.props.applicationInfo.dateFrom}</span>
              <span> - </span>
              <span className='info-date-to'>{this.props.applicationInfo.dateTo}</span>
            </div>
          </div>
          <p className='info-job-description'>{this.props.applicationInfo.jobDescription}</p>
        </div>
        <button className='btn-edit' type='button' onClick={this.props.handleEdit}>edit</button>
      </div>
    );
  }
}