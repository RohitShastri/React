import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
    
    const assignedClasses = [];
    
    let btnClass = classes.button;
    if(props.showPersons)
        btnClass = classes.buttonRed;
    
    if(props.persons.length <= 2)
      assignedClasses.push(classes.red);
    if(props.persons.length <=1)
      assignedClasses.push(classes.bold);
    
    return (
        <div>
            <h1>HEllo ALL USER</h1>
            <p className = {assignedClasses.join(' ')}>Let's Do Something</p>
            <button className = {btnClass} onClick={props.togglePersons}>Click</button>
        </div>
    );
};

export default cockpit;