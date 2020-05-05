import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import '../App.css';
import { Button } from 'reactstrap';

import fetch from 'isomorphic-fetch'
import runtimeEnv from '@mars/heroku-js-runtime-env'

export default class New extends Component {
  constructor(props){
    super()
  }
  render(){
    return (
      <Button>New</Button>
    )
  }
}
