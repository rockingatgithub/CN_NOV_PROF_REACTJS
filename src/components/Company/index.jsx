import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import style from './company.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter } from '../actions';
const Company = (props) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [description, setDescription] = useState('')
    const [lastDate, setLastDate] = useState('')
    const [companyPackage, setCompanyPackage] = useState('')

    const data = useSelector( state => state )
    console.log("The state from store", data)

    const dispatch = useDispatch()

    const submitHandler = async event => {

        event.preventDefault()

        const interview = {
            name,
            role,
            description,
            lastDate,
            package: companyPackage
        }

        const response = await  fetch('http://localhost:8000/interview/create', {
            method: 'POST',
            body: JSON.stringify(interview),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const parsedResponse = await response.json()
        console.log("interview", parsedResponse)

    }

    const incrementHandler = () => {
        dispatch(incrementCounter(10))
    }

    const decrementHandler = () => {
        dispatch(decrementCounter(8))
    }

    return (<>
        <h3> Interview Form </h3>
        
        <Form className={style['interview-form']} onSubmit={submitHandler} >

            <Form.Group controlId='name' >
                <Form.Label>Name</Form.Label>
                <Form.Control value={name} onChange={ event => setName(event.target.value)} placeholder={'Enter company Name'} />
            </Form.Group>

            <Form.Group controlId='role' >
                <Form.Label>Role</Form.Label>
                <Form.Control value={role} onChange={ event => setRole(event.target.value)} placeholder={'Enter company role'} />
            </Form.Group>

            <Form.Group controlId='description' >
                <Form.Label>Description</Form.Label>
                <Form.Control value={description} onChange={ event => setDescription(event.target.value)} placeholder={'Enter company description'} />
            </Form.Group>

            <Form.Group controlId='lastDate' >
                <Form.Label>LastDate</Form.Label>
                <Form.Control type='date' value={lastDate} onChange={ event => setLastDate(event.target.value)} placeholder={'Enter company lastDate'} />
            </Form.Group>

            <Form.Group controlId='companyPackage' >
                <Form.Label>Company Package</Form.Label>
                <Form.Control value={companyPackage} onChange={ event => setCompanyPackage(event.target.value)} placeholder={'Enter company package'} />
            </Form.Group>

            <Button type='primary'> Create </Button>

        </Form>


        <div>
            <h3> Store Example </h3>

            <Button onClick={incrementHandler} > Inc </Button>
                <span> {data.counter} </span>
            <Button onClick={decrementHandler} > Dec </Button> 

        </div>


    </>)

}

export default Company