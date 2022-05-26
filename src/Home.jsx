import React from 'react'
import {Link} from "react-router-dom"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HeaderComponent from './components/Headercomponents/HeaderComponent'
function Home() {
  console.log("header")
  return (
   <Link to="/reg">click</Link>
  )
}

export default Home