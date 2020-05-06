import React, { Component } from 'react'
import '../App.css'
import Note from './note.js'
import { FormGroup, Label, Input } from 'reactstrap'

const Notes = props =>
<FormGroup>
  <Label for="exampleSelectMulti">Select Multiple</Label>
  <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
    {Array.from(props.data).map((datum,index) => <Note key={index} datum={datum}/>)}
  </Input>
</FormGroup>

export default Notes;
