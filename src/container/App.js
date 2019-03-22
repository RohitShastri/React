import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = { 
    persons: [
    {id: 'asd1', name: 'Gitesh', age: '22'},
    {id: 'dffe2', name: 'Harsh', age: '21'},
    {id: 'ksdfkj3', name: 'Rohit', age: '21'}
    ],
    showPersons: false  
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex]}; 
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    
    let persons = null;
    
    if(this.state.showPersons)
    {
      persons = <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangeHandler} />
    }
    
    return (
      <div className = {classes.App}>
        <Cockpit 
          showPersons = {this.state.showPersons} 
          persons = {this.state.persons} 
          togglePersons = {this.togglePersonHandler} 
        />
        {persons}
      </div>
      //React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello Rohit Shastri'))
    );
  }
}

export default App;
