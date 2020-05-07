import React, { Component } from 'react'
import '../App.css'
import { FormGroup, Label, Input, Row, Col, Container } from 'reactstrap'
// import Note from '../components/note'
import Notes from '../components/notes'
import { connect } from 'react-redux'
import NotesAction from '../actions/notes'
import fetch from 'isomorphic-fetch'
import runtimeEnv from '@mars/heroku-js-runtime-env'

const mapStateToProps = state => {
  return {
    data: state.notes
  }
}

 const mapDispatchToProps = dispatch => {
   return {
     load: data => {
       dispatch(NotesAction(data))
     }
   }
 }
class Dashboard extends Component {
  constructor(props) {
    super()
    this.state = {
      data: ""
    }
  }

  handleClick = id => {
    this.props.history.push(`/note/${id}`)
  }
  componentDidMount() {
    const url = runtimeEnv().REACT_APP_API_URL
    fetch(`${url}/notes`)
      .then( res => res.json() )
      .then( json => {
        this.props.load(json)} )
  }
  render(){
    return (
      <div>
      <Container>
      <Row>
      <Col>
      <Notes data = {this.props.data} handleClick={this.handleClick}/>
      </Col>
      <Col>
      Right Side
      </Col>
      </Row>
      </Container>
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)
