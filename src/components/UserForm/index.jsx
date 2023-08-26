import { useState } from "react"
import Dashboard from "../Dashboard"
import {useNavigate} from 'react-router-dom'
import {GoogleLogin} from '@react-oauth/google'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import style from './userform.module.css'

const CANDIDATE_SIGNUP_URL = 'http://localhost:8000/student'
const ADMIN_SIGNUP_URL = 'http://localhost:8000/admin'


const UserForm = (props) => {

    // React Hooks
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const navigate = useNavigate()

    const submitHandler = async event => {

        event.preventDefault()

        const userObj = {
            name,
            email,
            password
        }

        const URL = isAdmin ? ADMIN_SIGNUP_URL : CANDIDATE_SIGNUP_URL
        const response = await fetch(URL, {
            method: 'POST',
            body: JSON.stringify(userObj),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const parsedResponse = await response.json()
        props.setUser(parsedResponse.data)
        navigate('/dashboard')

    }

    const googleAuthHandler = async credentialResponse => {

        const response = await fetch('http://localhost:8000/auth/google', {
            method: 'POST',
            body: JSON.stringify({ token: credentialResponse.credential }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const parsedResponse = await response.json()
        // console.log("The google response", parsedResponse)
        props.setUser(parsedResponse.data)
        navigate('/dashboard')

    }

    console.log("Userform props", props)


    return <>
        <h2 id={style['heading-new']} className={style.heading}> {props.heading} </h2>

        <Form onSubmit={submitHandler} className={style.userform}>

            { props.isSignUp && <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter name" value={name} onChange={(event) => setName(event.target.value)} />
            </Form.Group>}

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Admin Login/Signup" onChange={ event => setIsAdmin( prev => !prev ) }  />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        <div className={style['google-login']}>
            <GoogleLogin
                onSuccess={  credentialResponse => { googleAuthHandler(credentialResponse) }  }
                onError={ () => { console.log("Error occured in Google Login") } }
            />
        </div>
        

    </>

}

export default UserForm