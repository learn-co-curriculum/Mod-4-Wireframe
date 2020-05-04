import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
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
      <main>
      <Router>

    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/dash'>Dash</Link></li>
        <li><Link to='/new'>New</Link></li>
        <li><Link to='/edit'>Edit</Link></li>
        
      </ul>
    </nav>
    <Switch>
        <Route exact path = '/' component = { Login } />
        <Route exact path = '/dash' component = { Dash } />
        <Route exact path = '/new' component = { New } />
        <Route exact path = '/edit' component = { Edit } />
        <Route exact path = '/show' component = { Show } />
    </Switch>
      </Router>
      </main>


    );
  }
}

const Login = () => <p>Login Page: Data recieved from API: </p>

const Dash = () => <h1>Dash Page</h1>

const  New = () => <h1>New Page</h1>

const Edit = () => <h1>Edit Page</h1>

const Show = () => <h1>Show Page</h1>


export default App;
