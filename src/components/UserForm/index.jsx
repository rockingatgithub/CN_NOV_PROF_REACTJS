import { useState } from "react"
import Dashboard from "../Dashboard"
import {useNavigate} from 'react-router-dom'
import {GoogleLogin} from '@react-oauth/google'

const UserForm = (props) => {

    // React Hooks
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const submitHandler = async event => {

        event.preventDefault()

        const userObj = {
            name,
            email,
            password
        }

        const response = await fetch('http://localhost:8000/student', {
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
        console.log("The google response", parsedResponse)

    }

    console.log("Userform props", props)


    return <>
        <h1> {props.heading} </h1>

        <form onSubmit={submitHandler} >

            {props.isSignUp && <div>
                <label htmlFor="name" > Name:- </label>
                <input id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} />
            </div>}

            <div>
                <label htmlFor="email" > Email:- </label>
                <input id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>

            <div>
                <label htmlFor="password" > Password:- </label>
                <input id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </div>

            <button type="submit" > Submit </button>


        </form>

        <GoogleLogin
        
            onSuccess={  credentialResponse => { googleAuthHandler(credentialResponse) }  }
            onError={ () => { console.log("Error occured in Google Login") } }

        />

    </>

}

export default UserForm