import React, { Component } from 'react';
import '../App.css';

const ToDoItem = props => <option key={props.key}>{props.datum.category} {props.datum.description} {props.datum.due_date}</option>


export default ToDoItem;
