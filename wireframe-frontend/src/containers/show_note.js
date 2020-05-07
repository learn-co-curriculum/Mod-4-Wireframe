import React, { Component } from 'react';
import '../App.css';
import fetch from 'isomorphic-fetch'
import NoteAction from '../actions/note'
import runtimeEnv from '@mars/heroku-js-runtime-env'
import { connect } from 'react-redux'
import { Container, Row, Button} from 'reactstrap'
import ViewNote from '../components/view_note'
import EditNote from '../components/edit_note'


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
    this.state ={
      view: true
    }
  }
  componentDidMount(){
    const url = runtimeEnv().REACT_APP_API_URL
      fetch(`${url}/notes/${this.props.id}`)
        .then(res => res.json())
        .then(json => {
          this.props.load(json)
        })
  }

  handleEdit = () => {
    this.setState({view: !this.state.view})
  }

  renderView = () => {
    if(this.state.view){
      return <ViewNote title={this.props.note.title} description={this.props.note.description}
        handleEdit={this.handleEdit} />
    }
    else {
      return <EditNote title={this.props.note.title} description={this.props.note.description}
        handleEdit={this.handleEdit} />
    }
  }
  render(){
    return (this.renderView())
  }
}




export default connect(mapStateToProps,mapDispatchToProps)(ShowNote)
