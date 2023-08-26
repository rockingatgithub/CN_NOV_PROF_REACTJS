import React, { useEffect, useState } from "react"
import Button from "react-bootstrap/esm/Button"

const Jobs = props => {

    const [interviews, setInterviews] = useState([])

    const getInterviews = async () => {

        const interviews = await fetch('http://localhost:8000/interview/get')
        const parsedResponse = await interviews.json()
        if(interviews.status === 200) {
            return parsedResponse.data
        }
        return []
    }

    useEffect (() => {
        getInterviews().then( data => setInterviews(data)  )

    }, [])

    return (
    <>
        <h2> Jobs List:- </h2>
        <ul>
            { interviews.map( interview => <li key={interview._id}>
                <span>{interview.name}</span>
                <br/>
                <span> {interview.role} </span>
                <br/>
                <span> {interview.package} </span>
                <br/>
                <Button> Apply </Button>
            </li> ) }
        </ul>
    </>

    )

}

export default Jobs