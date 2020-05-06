import React, { Component } from 'react'
import '../App.css'
import { FormGroup, Label, Input } from 'reactstrap'
import Note from '../components/note'
import { connect } from 'react-redux'
import NotesAction from '../actions/notes'
import fetch from 'isomorphic-fetch'
import runtimeEnv from '@mars/heroku-js-runtime-env'

const mapStateToProps = state => {
  return {
    data: state.data
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
      .then( json => this.props.load(json) )
  }
  // this.setState({ data: json })
  renderNotes = () => {
    console.log(this.props);
    return Array.from(this.props.data).map((datum,index) =>
              <Note key={index} datum={datum}/>)
  }
  render(){
    return (
      <FormGroup>
        <Label for="exampleSelectMulti">Select Multiple</Label>
        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
          {this.renderNotes()}
        </Input>
      </FormGroup>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)
