import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Button, Form, Input} from 'reactstrap'




const EditNote = props =>
        <Form><Container>
                        <Row>
                          <label>Title:</label>
                          <Input value={props.title} onChange={props.handleChange}/>
                            <br />
                              <br />
                        </Row>
                        <Row>
                          <label>Description:</label>
                          <Input value={props.description} onChange={props.handleChange}/>
                        </Row>
                        <Row>
                          <label>Tags:</label>
                          <Input value={Array.from(props.tags).map(tag => tag.name)} onChange={props.handleChange}/>
                        </Row>
                        <Row>
                          <Button>SAVE</Button>
                        </Row>
                      </Container>
                      </Form>

export default EditNote
