const CANDIDATE_SIGNUP_URL = 'https://fantastic-fatigues-eel.cyclic.cloud/student'
const ADMIN_SIGNUP_URL = 'https://fantastic-fatigues-eel.cyclic.cloud/admin'

const submitHandler = async (event, navigate, userObj, isAdmin) => {

    event.preventDefault()

    const URL = isAdmin ? ADMIN_SIGNUP_URL : CANDIDATE_SIGNUP_URL
    const response = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(userObj),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const parsedResponse = await response.json()
    navigate('/dashboard')

}

const googleAuthHandler = async (credentialResponse, navigate) => {

    const response = await fetch('https://fantastic-fatigues-eel.cyclic.cloud/auth/google', {
        method: 'POST',
        body: JSON.stringify({ token: credentialResponse.credential }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const parsedResponse = await response.json()
    // console.log("The google response", parsedResponse)
    navigate('/dashboard')

}

export const incrementCounter = num => {
    return { type: 'INC_COUNTER', data: num  }
} 

export const decrementCounter = num => {
    return { type: 'DEC_COUNTER', data: num  }
} 


export const getInterviews = () => {

    return async (dispatch, getState) => {

        const interviews = await fetch('https://fantastic-fatigues-eel.cyclic.cloud/interview/get')
        const parsedResponse = await interviews.json()
        if(interviews.status === 200) {
             dispatch({type: 'GET_INTERVIEWS',  data: parsedResponse.data})
        } else {
            dispatch({ type: 'GET_INTERVIEWS', data: [] })
        }
    }

}