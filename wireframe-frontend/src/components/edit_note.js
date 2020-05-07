import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Button} from 'reactstrap'




const ViewNote = props => <Container>
                        <Row>
                          <div>{this.props.note.title}</div>
                            <br />
                              <br />
                        </Row>
                        <Row>
                          <div>{this.props.note.description}</div>
                        </Row>
                        <Row>
                          <Button>SAVE</Button>
                        </Row>
                      </Container>
