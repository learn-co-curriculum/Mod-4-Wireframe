import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import { ButtonGroup, Button } from 'reactstrap';


export default class NavBar extends Component {
  constructor(props){
    super()
  }
  render(){
     return (
       <ButtonGroup>
          <Button>FlatNote</Button>
          <Button color="info"><Link to='/dashboard'>Dashboard</Link></Button>
          <Button color="info"><Link to='/note/new'>New Note</Link></Button>
          <Button color="info"><Link to='/logout'>Sign Out</Link></Button>
       </ButtonGroup>


     )
  }
}
// <Button color="info"><Link to='/'>Home</Link></Button>
// <Button color="info"><Link to='/edit'>Edit Note</Link></Button>
