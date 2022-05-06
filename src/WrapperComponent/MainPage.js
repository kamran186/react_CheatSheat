import React from 'react'
import { Link } from 'react-router-dom'
import ClassComponent from '../ClassComponent'
import WrapperComponent from './WrapperComponent'

function MainPage() {
    return (
        <WrapperComponent>
            <h2>We are in Child Component</h2>
            <button><Link to='/class'>Class Component</Link></button>
            <button><Link to='/functional/kamran'>Functional Component</Link></button>
            <button><Link to='/hod'>Higher Order Component</Link></button>
            <h2>Child Component Ends Here</h2>
        </WrapperComponent>
    )
}

export default MainPage