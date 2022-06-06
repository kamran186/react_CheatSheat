import React, { Component } from 'react'

export default class Counter extends Component {
    
    componentDidMount(){
        console.log('Counter Component has been added')
    }
    componentDidUpdate(previousProps){
        console.log(`Previous is ${previousProps.count} and current is ${this.props.count}`)
        if(this.props.count !== previousProps.count){
            console.log('Counter Component has been updated')
        }
    }
    render() {
        return (
            <>
                <h1>
                    Counter(Child component)
                </h1>
                <h3>
                    Value of Count: {this.props.count}
                </h3>
            </>
        )
    }

    componentWillUnmount(){
        console.log('Counter Component has been removed')
    }
}
