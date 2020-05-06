import React, { Component } from 'react';
import '../App.css';
import { Button, Form, Label, Input, FormGroup, Row, Col, Card } from 'reactstrap';


export default class Login extends Component {
  constructor(props){
    super()
  }
  render(){
    return (
      <div className="mt-5">
        <Form>
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
