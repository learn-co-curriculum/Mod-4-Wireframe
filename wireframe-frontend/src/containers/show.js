import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'
import { Button } from 'reactstrap'


const Show = () =>   <Button>ID: {useParams()}</Button>

export default Show
