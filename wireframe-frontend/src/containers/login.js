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
    this.state = {
      userMessage: ''
    }
  }

  componentDidMount(){
    this.props.logIn('')
  }

  findUser = (username, data) => {
    let arr = Array.from(data);
    let userobj = arr.find(elem => elem.username === username)
    if(userobj){
      return userobj
    }
    else {
      return null
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const url = runtimeEnv().REACT_APP_API_URL
    const username = event.target.username.value
    fetch(`${url}/users`)
      .then(resp => resp.json())
      .then(data =>{
                    const founduser = this.findUser(username, data)
                    if(founduser){
                      this.setState({userMessage: `Greetings ${founduser.username}`})
                      this.props.logIn(founduser)
                    }
                    else {
                      this.setState({userMessage: 'Sorry user not found'})
                    }
                  })

    // const configObj = {
    //   method:'POST',
    //   headers: {
    //     "Content-Type":"application/json",
    //     "Accept":"application/json"
    //   },
    //   body: JSON.stringify({username: event.target.username.value})
    // }
    //
    // fetch(`${url}/users`,configObj)
    //   .then( res => res.json() )
    //   .then( json => {
    //     console.log(json)} )



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
          <Row>{this.state.userMessage}</Row>
        </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
