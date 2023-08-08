import { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            showCounter: true
        }

        this.printState = this.printState.bind(this)
    }

    componentDidMount = () => {
        console.log("Form componet mounted!")
    }

    componentDidUpdate = () => {

        console.log("Form component updated!")

    }

    clickHandler = () => {

        console.log("state in arrow", this.state)

        this.setState({
            heading: 'Signup Form'
        })

    }

    printState() {
        this.setState( prevState => ({
            showCounter: !prevState.showCounter
        }) )
        console.log("state in normal function", this.state)
    }

    

    render() {
        return <>
            <h1>
                {this.props.heading}
            </h1>
            <button onClick={this.clickHandler} > Toggle </button>

            { this.state.showCounter && <Counter/>}


            <button onClick={this.printState} > Toggle Counter </button>

        </>
    }

}

export default Form


class Counter extends Component {

    state = {
        counter: 0,
    }

    componentWillUnmount = () => {
        console.log("Unmounting component")
    }

    incrementHandler = () => {
        this.setState(prevState => ({ counter: prevState.counter + 1 }))

        this.setState(
            prevState => {
                return {
                    counter: prevState.counter + 2
                }
            }
        )

        this.setState(
            prevState => {
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

    render() {

        return <><button onClick={this.incrementHandler} > Increment counter </button>
            <span> Counter:- {this.state.counter} </span>
            <button onClick={this.decrementHandler} > Decrement counter </button></>

    }


}