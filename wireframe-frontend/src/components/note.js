import React, { Component } from 'react';
import '../App.css';

const Note = props => <option onClick={() => console.log('selected')}>{props.datum.title} {props.datum.description} </option>


export default Note;
