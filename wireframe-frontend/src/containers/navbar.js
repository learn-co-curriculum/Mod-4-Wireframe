import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import '../App.css';
import { Nav, NavItem, NavLink, ButtonGroup, Button } from 'reactstrap';


import fetch from 'isomorphic-fetch'
import runtimeEnv from '@mars/heroku-js-runtime-env'

export default class NavBar extends Component {
  constructor(props){
    super()
  }
  render(){
     return (
       <ButtonGroup>
          <Button>FlatNote</Button>
          <Button color="info"><Link to='/'>Home</Link></Button>
          <Button color="info"><Link to='/dashboard'>Dashboard</Link></Button>
          <Button color="info"><Link to='/new'>New Note</Link></Button>
          <Button color="info"><Link to='/edit'>Edit Note</Link></Button>
          <Button color="info"><Link to='/logout'>Sign Out</Link></Button>
       </ButtonGroup>

    
     )
  }
}
