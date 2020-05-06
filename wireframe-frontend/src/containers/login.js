import React, { Component } from 'react';
import '../App.css';
import { Button, Form, Label, Input } from 'reactstrap';


export default class Login extends Component {
  constructor(props){
    super()
  }
  render(){
    return (
      <Form>
        <Label for="username">Username</Label>
        <Input type="text" name="username" id="username" placeholder="username" />
        <Button>Login</Button>
      </Form>
    )
  }
}
