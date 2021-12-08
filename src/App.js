import { Component } from 'react';
import './styles/App.css';
import Application from './components/Application';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Application />
      </div>
    );
  }
}

export default App;
