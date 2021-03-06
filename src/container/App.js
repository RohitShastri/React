import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent {
  constructor(props){
    super(props);
    console.log("[App.js] from constructor", props);
    
    this.state = { 
      persons: [
      {id: 'asd1', name: 'Gitesh', age: '22'},
      {id: 'dffe2', name: 'Harsh', age: '21'},
      {id: 'ksdfkj3', name: 'Rohit', age: '21'}
      ],
      showPersons: false  
    }
  }
  componentWillMount(){
    console.log("[App.js] from componentWillMount()");
  }
  componentDidMount(){
    console.log("[App.js] from componentDidMount()");
  }
  
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log("[Updated App.js] from shouldupdate", nextProps, nextState);
  //   //console.log(nextProps.persons !== this.state.persons || nextProps.showPersons !== this.state.showPersons)
  //   return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons ; 
  //   //return true;
  // }

  componentWillUpdate(nextProps, nextState){
    console.log("[Updated App.js] from componentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate(nextProps, nextState){
    console.log("[Updated App.js] from componentDidUpdate", nextProps, nextState);
    
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
    console.log("[App.js] from render()");
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
        <button onClick = {() => {this.setState({showPersons: true})}}>Click</button>
        <Cockpit 
          mainTitle = {this.props.title}
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
