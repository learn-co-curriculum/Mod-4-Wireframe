import React, { Component } from 'react';
import '../App.css';
import { Button, Container, Row, Form, Col, Label, Input} from 'reactstrap';


export default class New extends Component {
  constructor(props){
    super()
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push('/dashboard')
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
                <Input type="text" id="title" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Label>Notes</Label>
              </Col>
              <Col>
                <Input type="text" id="notes" />
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
