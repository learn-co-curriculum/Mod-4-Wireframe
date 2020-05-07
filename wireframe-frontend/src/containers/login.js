import React, { Component } from 'react';
import '../App.css';
import { Button, Form, Label, Input, FormGroup, Row, Col, Card } from 'reactstrap';
import { connect } from 'react-redux'
import UsersAction from '../actions/users'
import fetch from 'isomorphic-fetch'
import runtimeEnv from '@mars/heroku-js-runtime-env'

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

 const mapDispatchToProps = dispatch => {
   return {
     logIn: user => {
       dispatch(UsersAction(user))
     }
   }
 }

class Login extends Component {
  constructor(props){
    super()
  }

  componentDidMount(){
    this.props.logIn('')
  }

  handleSubmit = event => {
    event.preventDefault();
    const url = runtimeEnv().REACT_APP_API_URL
    const configObj = {
      method:'POST',
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({username: event.target.username.value})
    }

    fetch(`${url}/users`,configObj)
      .then( res => res.json() )
      .then( json => {
        console.log(json)} )

    this.props.logIn(event.target.username.value)

  }

  render(){
    return (
      <div className="mt-5">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Row className="justify-content-center">
              <Col>
                <Input type="text" name="username" id="username" placeholder="username" />
                </Col>
                <Col>
                <Button>Login</Button>
                </Col>
              </Row>
            </FormGroup>
          </Form>
        </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
