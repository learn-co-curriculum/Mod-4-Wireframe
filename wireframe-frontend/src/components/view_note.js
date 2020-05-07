import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Button} from 'reactstrap'




const ViewNote = props => <Container>
                        <Row>
                          <div>{props.title}</div>
                            <br />
                              <br />
                        </Row>
                        <Row>
                          <div>{props.description}</div>
                        </Row>
                        <Row>
                          <Button onClick={props.handleEdit}>Edit</Button>
                          <Button onClick={props.handleDelete}>Delete</Button>
                        </Row>
                      </Container>


export default ViewNote
