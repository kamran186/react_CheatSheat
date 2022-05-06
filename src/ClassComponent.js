import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ClassComponent extends Component {
  render() {
    return (
      <>
        <h1>ClassComponent</h1>
        <button>
          <Link to={'classcl'}>Go to Component Lifecycle</Link>
        </button>
      </>
    )
  }
}
