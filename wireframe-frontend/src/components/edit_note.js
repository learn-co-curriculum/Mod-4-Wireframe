import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Button, Form, Input} from 'reactstrap'




const EditNote = props =>
        <Form><Container>
                        <Row>
                          <label>Title:</label>
                          <Input value={props.title} name="title" onChange={props.handleChange}/>
                            <br />
                              <br />
                        </Row>
                        <Row>
                          <label>Description:</label>
                          <Input value={props.description} name="description" onChange={props.handleChange}/>
                        </Row>
                        <Row>
                          <label>Tags:</label>
                          <Input value={props.tags} name="tags" onChange={props.handleChange}/>
                        </Row>
                        <Row>
                          <Button>SAVE</Button>
                        </Row>
                      </Container>
                      </Form>

export default EditNote
