import React, { Component } from 'react';
import './App.css';

import fetch from 'isomorphic-fetch'
import runtimeEnv from '@mars/heroku-js-runtime-env'

class App extends Component {

  constructor() {
    super()
    this.state = {
      data: ""
    }
  }

  componentDidMount() {
    const url = runtimeEnv().REACT_APP_API_URL
    fetch(url)
      .then( res => res.json() )
      .then( json => this.setState({ data: json }) )
  }

  render() {
    return (
      <p>Data recieved from API: { this.state.data }</p>
    );
  }
}

export default App;
