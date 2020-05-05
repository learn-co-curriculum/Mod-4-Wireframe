import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import '../App.css';
import { Button } from 'reactstrap';

import fetch from 'isomorphic-fetch'
import runtimeEnv from '@mars/heroku-js-runtime-env'

export default class NavBar extends Component {
  constructor(props){
    super()
  }
  render(){
    return (
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/dashboard'>Dashboard</Link></li>
          <li><Link to='/new'>New</Link></li>
          <li><Link to='/edit'>Edit</Link></li>
          <li><Link to='/logout'>Logout</Link></li>
        </ul>
      </nav>
    )
  }
}
