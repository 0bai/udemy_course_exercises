import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };
	  setTimeout(() => {
		  let instructorIndex = Math.floor(Math.random() * this.state.instructors.length);
		  let hobbiesIndex = Math.floor(Math.random() * this.state.instructors[ instructorIndex ].hobbies.length);
		  const instructors = this.state.instructors.map((instructor, i) => ( i === instructorIndex ?
			  {...instructor, hobbies: instructor.hobbies.splice(hobbiesIndex, 1)}
			  : instructor ));
		  this.setState({instructors});
	  }, 5000);
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;
