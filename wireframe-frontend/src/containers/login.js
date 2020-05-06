import React, { Component } from 'react';
import '../App.css';
import { Button, Form, Label, Input, FormGroup, Row, Col, Card } from 'reactstrap';
import { connect } from 'react-redux'
import UsersAction from '../actions/users'

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

  handleSubmit = event => {
    event.preventDefault();
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
