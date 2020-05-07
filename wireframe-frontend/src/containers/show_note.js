import React, { Component } from 'react';
import '../App.css';
import fetch from 'isomorphic-fetch'
import NoteAction from '../actions/note'
import runtimeEnv from '@mars/heroku-js-runtime-env'
import { connect } from 'react-redux'
import { Container, Row, Button} from 'reactstrap'
import ViewNote from '../components/view_note'


const mapStateToProps = state => {
  return {
    note: state.note
  }
}

 const mapDispatchToProps = dispatch => {
   return {
     load: data => {
       dispatch(NoteAction(data))
     }
   }
 }

class ShowNote extends Component {
  constructor(props){
    super()
  }
  componentDidMount(){
    const url = runtimeEnv().REACT_APP_API_URL
      fetch(`${url}/notes/${this.props.id}`)
        .then(res => res.json())
        .then(json => {
          console.log(json)
          this.props.load(json)
        })
  }
  render(){
    return (
      <Container>
        <Row>
          <div>{this.props.note.title}</div>
          <br />
          <br />
        </Row>
        <Row>
          <div>{this.props.note.description}</div>
        </Row>
        <Row>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </Row>
      </Container>

    )
  }
}




export default connect(mapStateToProps,mapDispatchToProps)(ShowNote)
