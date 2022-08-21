import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

export default function Home() {
  const navigate=useNavigate();
  return (
    <>
    
      <Header/>

      <h1>Home Page</h1>

      <button onClick={()=>navigate('/contact')}>Contact</button>
    </>
  )
}
