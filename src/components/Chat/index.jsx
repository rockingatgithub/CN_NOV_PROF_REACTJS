import { useEffect, useState } from 'react'
import {io} from 'socket.io-client'

const socket = io('https://fantastic-fatigues-eel.cyclic.cloud')

const Chat = (props) => {

    const [messageList, setMessageList] = useState([]);
    const [messageInput, setMessageInput] = useState('')

    useEffect( () => {
        socket.on('message', (data) => {
            setMessageList( prevMessage => [...prevMessage, data.data] )
            console.log(data)
        })
    }, [])

    const messageInputHandler = event => {
        setMessageInput(event.target.value)
    }

    const submitHandler = event => {
        event.preventDefault()
        socket.emit('client', { data: messageInput })
        // setMessageList( prevMessage => [...prevMessage, messageInput] )
    }

    return <>
        <h1> Chat app! </h1>
        <ul>
            {
                messageList.map(message => <li> {message} </li>)
            }
        </ul>
        <form onSubmit={submitHandler} >
            <input type="text" value={messageInput} onChange={messageInputHandler} />
            <button type='submit' > Submit </button>
        </form>
    </>

}

export default Chat