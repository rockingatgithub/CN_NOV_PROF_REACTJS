import React from "react"
import Form from "../Class_Form"
import './index.module.css'

const App = () => {

  const navLinks = [ 'Home', 'About', 'Careers', 'Contact Us', 'Main', 'Signup' ]
  const showHeading = false

  return <>
    {showHeading && <h1> Interview Portal </h1>}
    <nav> 
      <ul>
        { navLinks.map( link => <li> {link} </li> ) }
      </ul>  
    </nav>

    <Form/>

  </>

}

export default App