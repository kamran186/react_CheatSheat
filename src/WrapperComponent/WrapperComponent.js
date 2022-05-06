import React from 'react'

function WrapperComponent(props) {
    return (
        <>
            <h1>This is from Wrapper Component</h1>
            <hr />
            {props.children}
            <hr />
            <h1>Wrapper Component Ends here</h1>
        </>
    )
}

export default WrapperComponent