import { Component } from 'react';
import './styles/App.css';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import Application from './components/Application';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputs = this.handleInputs.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

    this.state = {
        name: '',
        email: '',
        phone: '',
        school: '',
        major: '',
        date: new Date().toLocaleDateString('en-US'),
        company: '',
        position: '',
        jobDescription: '',
        dateFrom: new Date().toLocaleDateString('en-US'),
        dateTo: new Date().toLocaleDateString('en-US'),
        isSubmitted: false,
    }
  }

  handleInputs(event) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit() {
    console.log(this.state);
    this.setState({
      isSubmitted: true,
    })
  }

  handleEdit() {
    this.setState({
      isSubmitted: false,
    })
  }

  render() {
    if(this.state.isSubmitted) {
      return (
        <Application handleEdit={this.handleEdit} applicationInfo={this.state} />
      );
    } else {
      return (
        <div>
          <form>
            <General header='general info' handleInputs={this.handleInputs} />
            <Education header='education' handleInputs={this.handleInputs} />
            <Experience header='experience' handleInputs={this.handleInputs} />
            <button type='button' onClick={this.handleSubmit}>submit</button>
          </form>
        </div>
      );
    }
  }
}

export default App;
