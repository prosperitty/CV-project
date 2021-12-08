import { Component } from 'react';
import './styles/App.css';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      personalInfo: {
        name: '',
        email: '',
        phone: '',
      },
      educationInfo: {
        school: '',
        major: '',
        date: '',
      },
      experienceInfo: {
        company: '',
        position: '',
        jobDescription: '',
        dateFrom: new Date(),
        dateTo: new Date(),
      }
    }
  }

  render() {
    return (
      <div>
        <form>
          <General header='general info' />
          <Education header='education' />
          <Experience header='experience' />
          <button type='button'>edit</button>
          <button type='button'>start</button>
        </form>
      </div>
    );
  }
}

export default App;
