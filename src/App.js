import { Component } from 'react';
import './styles/App.css';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <form>
          <General header='general info' />
          <Education header='education' />
          <Experience header='experience' />
        </form>
      </div>
    );
  }
}

export default App;
