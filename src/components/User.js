import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function User() {
    const params=useParams();
    const {name}=params;
    const location=useLocation();
    console.log(location)
  return (
    <>
    <h1>Hello  {name}</h1>
    <h1>Welcome  {location.state.name}</h1>
      
    </>
  )
}
