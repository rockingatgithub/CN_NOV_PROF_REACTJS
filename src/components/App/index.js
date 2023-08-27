import React, { useState } from "react"
import { Route, Routes, Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from "../Class_Form"
import Dashboard from "../Dashboard"
import UserForm from "../UserForm"
import './index.module.css'
import Jobs from "../Jobs";

const App = () => {

  const [user, setUser] = useState({})

  const navLinks = [
    { path: '/', title: 'Home' },
    { path: '/signup', title: 'Sign Up' },
    { path: '/signin', title: 'Sign In' }, 
    { path: '/jobs', title: 'Jobs' },
    { path: '/dashboard', title: 'Dashboard' }
  ]

  return <>

    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">Interview Portal</Navbar.Brand>
        <Nav className="me-auto">

          {navLinks.map(link => <Nav.Link key={link.path}> <Link to={link.path}> {link.title} </Link> </Nav.Link>)}
        </Nav>
      </Container>
    </Navbar>

    <Routes>
      <Route path="/signup" element={<UserForm heading="Signup Form" isSignUp={true} setUser={setUser} />} />
      <Route path="/signin" element={<UserForm heading="Signin Form" setUser={setUser} />} />
      <Route path='/dashboard' element={<Dashboard user={user} />} />
      <Route path='/jobs' element={<Jobs user={user} />} />

    </Routes>



  </>

}

export default App