import React, { useEffect, useState } from 'react';
import './styles/App.css';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import Application from './components/Application';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleInputs = this.handleInputs.bind(this);
//     this.handleEdit = this.handleEdit.bind(this);
//     this.state = {
//       name: '',
//       email: '',
//       phone: '',
//       school: '',
//       major: '',
//       date: new Date().toLocaleDateString('en-US'),
//       company: '',
//       position: '',
//       jobDescription: '',
//       dateFrom: new Date().toLocaleDateString('en-US'),
//       dateTo: new Date().toLocaleDateString('en-US'),
//       isSubmitted: false,
//     };
//   }

//   handleInputs(event) {
//     this.setState({
//       ...this.state,
//       [event.target.name]: event.target.value,
//     });

//     if (
//       event.target.name === 'date' ||
//       event.target.name === 'dateFrom' ||
//       event.target.name === 'dateTo'
//     ) {
//       const date = new Date(event.target.value);
//       const months = [
//         'January',
//         'February',
//         'March',
//         'April',
//         'May',
//         'June',
//         'July',
//         'August',
//         'September',
//         'October',
//         'November',
//         'December',
//       ];
//       const month = date.getMonth();
//       this.setState({
//         ...this.state,
//         [event.target.name]: `${months[month]} ${date.getFullYear()}`,
//       });
//     }
//   }

//   handleSubmit() {
//     this.setState({
//       isSubmitted: true,
//     });
//   }

//   handleEdit() {
//     this.setState({
//       isSubmitted: false,
//     });
//   }

//   render() {
//     if (this.state.isSubmitted) {
//       return (
//         <div className="cv">
//           <Application
//             handleEdit={this.handleEdit}
//             applicationInfo={this.state}
//           />
//         </div>
//       );
//     } else {
//       return (
//         <div className="cv-form-container">
//           <header>
//             <h1>CV Application Generator</h1>
//             <h2>Create your application</h2>
//           </header>
//           <form>
//             <General
//               header="personal information"
//               applicationInfo={this.state}
//               handleInputs={this.handleInputs}
//             />
//             <Education
//               header="education"
//               applicationInfo={this.state}
//               handleInputs={this.handleInputs}
//             />
//             <Experience
//               header="experience"
//               applicationInfo={this.state}
//               handleInputs={this.handleInputs}
//             />
//             <div className="btn-container">
//               <button type="button" onClick={this.handleSubmit}>
//                 submit
//               </button>
//             </div>
//           </form>
//         </div>
//       );
//     }
//   }
// }

const App = () => {
  const [applicationInfo, setApplicationInfo] = useState({
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
  });
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [school, setSchool] = useState('');
  // const [major, setMajor] = useState('');
  // const [date, setDate] = useState(new Date().toLocaleDateString('en-US'));
  // const [company, setCompany] = useState('');
  // const [position, setPosition] = useState('');
  // const [jobDescription, setJobDescription] = useState('');
  // const [dateFrom, setDateFrom] = useState(new Date().toLocaleDateString('en-US'));
  // const [dateTo, setDateTo] = useState(new Date().toLocaleDateString('en-US'));
  // const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputs = (event) => {
    setApplicationInfo({
      ...applicationInfo,
      [event.target.name]: event.target.value,
    });
    // setName(event.target.value);
    // setEmail(event.target.value);
    // setPhone(event.target.value);
    // setSchool(event.target.value);
    // setMajor(event.target.value);
    // setCompany(event.target.value);
    // setPosition(event.target.value);
    // setJobDescription(event.target.value);
    // setDate(event.target.value);

    if (
      event.target.name === 'date' ||
      event.target.name === 'dateFrom' ||
      event.target.name === 'dateTo'
    ) {
      const date = new Date(event.target.value);
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      const month = date.getMonth();
      setApplicationInfo({
        ...applicationInfo,
        [event.target.name]: `${months[month]} ${date.getFullYear()}`,
      });
    }
  }

  const handleSubmit = () => {
    setApplicationInfo({ ...applicationInfo, isSubmitted: true });
  }

  const handleEdit = () => {
    setApplicationInfo({ ...applicationInfo, isSubmitted: false });
  }

  if (applicationInfo.isSubmitted) {
    return (
      <div className="cv">
        <Application
          handleEdit={handleEdit}
          applicationInfo={applicationInfo}
        />
      </div>
    );
  } else {
    return (
      <div className="cv-form-container">
        <header>
          <h1>CV Application Generator</h1>
          <h2>Create your application</h2>
        </header>
        <form>
          <General
            header="personal information"
            applicationInfo={applicationInfo}
            handleInputs={handleInputs}
          />
          <Education
            header="education"
            applicationInfo={applicationInfo}
            handleInputs={handleInputs}
          />
          <Experience
            header="experience"
            applicationInfo={applicationInfo}
            handleInputs={handleInputs}
          />
          <div className="btn-container">
            <button type="button" onClick={handleSubmit}>
              submit
            </button>
          </div>
        </form>
      </div>
    );
  }
};

export default App;
