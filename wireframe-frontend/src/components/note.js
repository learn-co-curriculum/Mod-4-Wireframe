import React, { Component } from 'react';
import '../App.css';

const Note = props => <option key={props.key}>{props.datum.title} {props.datum.description} </option>


export default Note;
