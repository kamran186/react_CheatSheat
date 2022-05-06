import React from 'react'
import { useParams } from 'react-router-dom'

function FunctionalComponent({ match }) {
  const { name } = useParams()
  return (
    <div>FunctionalComponent created by {name}</div>
  )
}

export default FunctionalComponent