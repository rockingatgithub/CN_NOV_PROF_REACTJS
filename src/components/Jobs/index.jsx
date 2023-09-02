import React, { useEffect } from "react"
import Button from "react-bootstrap/esm/Button"
import { useDispatch, useSelector } from "react-redux"
import { getInterviews } from "../actions"

const Jobs = props => {

    const interviews = useSelector(state => state.interviews)
    const dispatch = useDispatch()

    useEffect (() => {
        dispatch( getInterviews() )
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