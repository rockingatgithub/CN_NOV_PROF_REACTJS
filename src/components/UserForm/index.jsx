import { useState } from "react"
import Dashboard from "../Dashboard"
import {useNavigate} from 'react-router-dom'

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

    </>

}

export default UserForm