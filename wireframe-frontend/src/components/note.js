import React, { Component } from 'react';
import '../App.css';

const Note = props => <option onClick={() => props.handleClick(props.id)}>{props.datum.title} {props.datum.description} </option>

export default Note;
