import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'
import { Button } from 'reactstrap'


const Show = props => {
console.log(props)
return <Button>ID:{props.match.params.id}</Button>
}
export default Show
