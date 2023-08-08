import React, { useState } from "react"
import { Route, Routes, Link } from "react-router-dom"
import Form from "../Class_Form"
import Dashboard from "../Dashboard"
import UserForm from "../UserForm"
import './index.module.css'

const App = () => {

  const [user, setUser] = useState({})

  const navLinks = [
    { path: '/', title: 'Home'}, 
  {path: '/signup', title: 'Sign Up'}, 
  {path: '/signin', title: 'Sign In'}]

  return <>

    <h1> Interview Portal </h1>
    <nav>
      <ul>
        {navLinks.map(link => <Link to={link.path}> {link.title} </Link>)}
      </ul>
    </nav>
    <Routes>
      <Route path="/signup" element={<UserForm heading="Signup Form" isSignUp={true} setUser={setUser} />} />
      <Route path="/signin" element={<UserForm heading="Signin Form" setUser={setUser} />} />
      <Route path='/dashboard' element={<Dashboard user={user} />} />
    </Routes>



  </>

}

export default App