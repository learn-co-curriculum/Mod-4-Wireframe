import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Button, Form, Input} from 'reactstrap'




const EditNote = props =>
        <Form><Container>
                        <Row>
                          <label>Title:</label>
                          <Input value={props.title}/>
                            <br />
                              <br />
                        </Row>
                        <Row>
                          <label>Description:</label>
                          <Input value={props.description} />
                        </Row>
                        <Row>
                          <label>Tags:</label>
                          <Input value={Array.from(props.tags).map(tag => tag.name)}/>
                        </Row>
                        <Row>
                          <Button>SAVE</Button>
                        </Row>
                      </Container>
                      </Form>

export default EditNote
