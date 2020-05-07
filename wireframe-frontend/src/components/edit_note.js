import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Button, Form} from 'reactstrap'




const EditNote = props =>
        <Form><Container>
                        <Row>
                          <div>{props.title}</div>
                            <br />
                              <br />
                        </Row>
                        <Row>
                          <div>{props.description}</div>
                        </Row>
                        <Row>
                          <Button>SAVE</Button>
                        </Row>
                      </Container>
                      </Form>

export default EditNote
