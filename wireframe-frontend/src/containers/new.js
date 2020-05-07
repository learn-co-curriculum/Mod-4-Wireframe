import React, { Component } from 'react';
import '../App.css';
import { Button, Container, Row, Form, Col, Label, Input} from 'reactstrap';
import fetch from 'isomorphic-fetch'
import runtimeEnv from '@mars/heroku-js-runtime-env'

export default class New extends Component {
  constructor(props){
    super()
  }

  handleSubmit = event => {
    event.preventDefault();

    const bodyObject = {
                        title: event.target.title.value,
                        description: event.target.description.value,
                        user_id: 19
                        }
    const url = runtimeEnv().REACT_APP_API_URL
    const reqObj = {
      method: "POST",
       headers: {
         "Content-Type":"application/json",
         "Accept":"application/json"
       },
       body:JSON.stringify(bodyObject)

     }
     fetch(`${url}/notes`, reqObj)
       .then( res => res.json() )
       .then( data => {
         console.log(data)} )

    // this.props.history.push('/dashboard')
  }

  render(){
    return (
      <div className="mt-5">
        <Form onSubmit={this.handleSubmit}>
          <Container>
            <Row>
              <Col>
                <Label>Title</Label>
              </Col>
              <Col>
                <Input type="text" id="title" name="title" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Label>Notes</Label>
              </Col>
              <Col>
                <Input type="text" id="notes" name="description" />
              </Col>
            </Row>
            <Row>
              <Col>
              </Col>
              <Col>
                <Button type="submit">SAVE</Button>
              </Col>
            </Row>

          </Container>
        </Form>

      </div>

    )
  }
}
