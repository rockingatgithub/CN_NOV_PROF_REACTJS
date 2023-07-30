import {Component} from 'react'

class Form extends Component {

    constructor (props) {
        super(props)
        this.state = {
            heading: 'Signin Form',
            counter: 0
        }
    }

    clickHandler = () => {

        this.setState({
            heading: 'Signup Form'
        })

    }

    incrementHandler = () => {
        this.setState( prevState => ({counter: prevState.counter + 1}) )

        this.setState( 
            prevState =>  {
                return {
                    counter: prevState.counter + 2
                }
            }
        )

        this.setState( 
            prevState =>  {
                return {
                    counter: prevState.counter + 4
                }
            }
        )
    }

    decrementHandler = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render () {
        return <>
            <h1>
                { this.state.heading }
            </h1>
            <button onClick={this.clickHandler} > Toggle </button>
            <button onClick={this.incrementHandler} > Increment counter </button>
            <span> Counter:- {this.state.counter} </span>
            <button onClick={this.decrementHandler} > Decrement counter </button>
        </>
    }

}

export default Form