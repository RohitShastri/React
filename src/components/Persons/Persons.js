import React , { Component }from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props){
    super(props);
    console.log("[Persons.js] from constructor", props);
  }
  componentWillMount(){
    console.log("[Persons.js] from componentWillMount()");
  }
  componentDidMount(){
    console.log("[Persons.js] from componentDidMount()");
  }

  componentWillReceiveProps(nextProps) {
    console.log("[Updated Persons.js] from componentWillReceiveProps", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("[Updated Persons.js] from shouldupdate", nextProps, nextState);
    return nextProps.persons !== this.props.persons || 
           nextProps.clicked !== this.props.clicked ||
           nextProps.changed !== this.props.changed ; 
    
  }

  componentWillUpdate(nextProps, nextState){
    console.log("[Updated Persons.js] from componentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate(nextProps, nextState){
    console.log("[Updated Persons.js] from componentDidUpdate", nextProps, nextState);
    
  }
  render() {
    console.log("[Persons.js] from render()");
    return this.props.persons.map((person, index) => {
      return (
          <Person 
            key = {person.id}
            name = {person.name} 
            age = {person.age} 
            click = {() => this.props.clicked(index)}
            changed = {(event) => this.props.changed(event, person.id)}
          />
        )
    })
  }
}

export default Persons;