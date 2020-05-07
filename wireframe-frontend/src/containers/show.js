import React, { Component } from 'react'
import '../App.css'
import { FormGroup, Label, Input, Row, Col, Container, Button } from 'reactstrap'
import Notes from '../components/notes'
import { connect } from 'react-redux'
import NotesAction from '../actions/notes'
import fetch from 'isomorphic-fetch'
import runtimeEnv from '@mars/heroku-js-runtime-env'
import ShowNote from '../containers/show_note'

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

  componentDidMount() {
    const url = runtimeEnv().REACT_APP_API_URL
    fetch(url)
      .then( res => res.json() )
      .then( json => {
        this.props.load(json)} )

      fetch(`${url}/notes/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(json => {
          console.log(json)
          this.setState({data: json})
        })
  }
  render(){
    return (
      <div>
      <Container>
      <Row>
      <Col>
      <Notes data = {this.props.data} />
      </Col>
      <Col>
        <ShowNote id={this.props.match.params.id}/>
      </Col>
      </Row>
      </Container>
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)
