import React, { Component } from 'react'

export default class Counter extends Component {
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
}
