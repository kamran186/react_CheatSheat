import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers'
import React, { Component } from 'react'
import Counter from './Counter/Counter'

export default class ClassComponentLifeCycle extends Component {

    constructor() {
        // This is called before page loaded
        super()
        console.log('Constructor')
        this.state = {
            count: 0
        }

    }

    componentDidMount() {
        // Works after Constructor. When the component renders the first time
        console.log('Parent Component Did Mount is called')
    }


    // Costum function
    increament() {
        this.setState({
            count: this.state.count + 1
        })
    }
    // Costum function
    decreament() {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <>
                <h1>ClassComponentLifeCycle</h1>
                {this.state.count < 5 ?
                    <Counter count={this.state.count} />
                    : null
                }

                {/* To call 'this' in increament function, use arrow function or bind 'this' while calling the function */}
                <button onClick={() => this.increament()}>Increament using arrow function</button>
                <button onClick={this.increament.bind(this)}>Increament using bind</button>

                
                <button onClick={this.decreament.bind(this)}>decreament using bind</button>

                {/* This will create error because 'this' is undefined there */}
                <button onClick={this.increament}>Increament(Error)</button>
            </>
        )
    }
}
