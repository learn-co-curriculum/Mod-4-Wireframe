import React, { Component } from 'react';
import '../App.css';
import { FormGroup, Label, Input } from 'reactstrap';

import fetch from 'isomorphic-fetch'
import runtimeEnv from '@mars/heroku-js-runtime-env'

export default class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      data: ""
    }
  }

  componentDidMount() {
    const url = runtimeEnv().REACT_APP_API_URL
    fetch(url)
      .then( res => res.json() )
      .then( json => this.setState({ data: json }) )
  }
  renderNotes = () => {
    console.log(this.state.data);
    return Array.from(this.state.data).map((datum,index) => <option key={index}>{datum.description}</option>)
  }
  render(){
    return (
      <FormGroup>
        <Label for="exampleSelectMulti">Select Multiple</Label>
        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
          {this.renderNotes()}
        </Input>
      </FormGroup>
      // <Button>Dashboard: {this.state.data}</Button>
    )
  }
}
