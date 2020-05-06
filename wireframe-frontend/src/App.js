import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Login from './containers/login'
import Dashboard from './containers/dashboard'
import Show from './containers/show'
import New from './containers/new'
import Edit from './containers/edit'
import NavBar from './containers/navbar'
import { Container, Row } from 'reactstrap'

class App extends Component {

  constructor() {
    super()
    this.state = {
      data: ""
    }
  }


  render() {
    return (
      <main>
      <Router>
      <Container>
        <Row className="justify-content-center">
          <NavBar />
        </Row>
        <Row className="justify-content-center">
    <Switch>
        <Route exact path = '/' component = { Login } />
        <Route exact path = '/dashboard' component = { Dashboard } />
        <Route exact path = '/new' component = { New } />
        <Route exact path = '/edit' component = { Edit } />
        <Route exact path = '/show' component = { Show } />
    </Switch>
    </Row>
    </Container>
      </Router>
      </main>


    );
  }
}

// const Login = () => <Button>Login</Button>

// const Dashboard = () => <h1>Dash Page</h1>

// const  New = () => <h1>New Page</h1>

// const Edit = () => <h1>Edit Page</h1>
//
// const Show = () => <h1>Show Page</h1>


export default App;
