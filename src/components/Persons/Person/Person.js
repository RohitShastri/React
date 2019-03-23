import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component{
    constructor(props){
        super(props);
        console.log("[Person.js] from constructor", props);
      }
      componentWillMount(){
        console.log("[Person.js] from componentWillMount()");
      }
      componentDidMount(){
        console.log("[Person.js] from componentDidMount()");
      }
    render(){
        console.log("[Person.js] from render()");
        return (
            <div className={classes.Person}>
                <p onClick = {this.props.click}>I'm {this.props.name}, my age is : {this.props.age}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
                <p>{this.props.children}</p>
            </div>
        )
    }
}

export default Person;