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
      view: true,
      title: '',
      description: '',
      tags: []
    }
  }

  getNote = () => {
    const url = runtimeEnv().REACT_APP_API_URL
      fetch(`${url}/notes/${this.props.id}`)
        .then(res => res.json())
        .then(json => {
          this.setState({title: json.title,
                        description: json.description,
                        tags: Array.from(json.tags).map(tag => tag.name).join(',')})
          this.props.load(json)

        })
  }
  componentDidMount(){
    this.getNote()
  }

  componentWillReceiveProps(){
    this.getNote()
  }

  handleChange = event => {
    this.setState({[event.target.name]:event.target.value})
    // this.props.load(Object.assign({},this.props.note, {[event.target.name]: event.target.value}))
  }

  handleEdit = () => {
    this.setState({view: !this.state.view})
  }

  handleDelete = () => {
    const url = runtimeEnv().REACT_APP_API_URL
      fetch(`${url}/notes/${this.props.id}`,{method:'DELETE'})
        .then(resp => resp.json())
        .then(data => console.log(data))
  }

  renderView = () => {
    if(this.state.view){
      return <ViewNote title={this.state.title} description={this.state.description}
        handleEdit={this.handleEdit} handleDelete={this.handleDelete} />
    }
    else {
      return <EditNote title={this.state.title} description={this.state.description}
        tags={this.state.tags} handleEdit={this.handleEdit} handleChange={this.handleChange} />
    }
  }
  render(){
    return (this.renderView())
  }
}




export default connect(mapStateToProps,mapDispatchToProps)(ShowNote)
