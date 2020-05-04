import React, { Component }, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
      <Router>
        <p>Data recieved from API: { this.state.data }</p>
      </Router>

    );
  }
}

export default App;
