import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import '../App.css';
import { Nav, NavItem, NavLink } from 'reactstrap';


import fetch from 'isomorphic-fetch'
import runtimeEnv from '@mars/heroku-js-runtime-env'

export default class NavBar extends Component {
  constructor(props){
    super()
  }
  render(){
    return (
     <Nav pills>
      <NavItem>
        <NavLink disabled href="#">FlatNote</NavLink>
       </NavItem>
       <NavItem>
         <NavLink href="#">
          <Link to='/'>Home</Link>
         </NavLink>
       </NavItem>
       <NavItem>
         <NavLink href="#">
             <Link to='/dashboard'>Dashboard</Link>
         </NavLink>
       </NavItem>
       <NavItem>
         <NavLink href="#">
             <Link to='/new'>New Note</Link>
         </NavLink>
       </NavItem>
       <NavItem>
         <NavLink href="#">
             <Link to='/edit'>Edit Note</Link>
         </NavLink>
       </NavItem>
       <NavItem>
         <NavLink href="#">
             <Link to='/logout'>Sign Out</Link>
         </NavLink>
       </NavItem>
     </Nav>
    )
  }
}
