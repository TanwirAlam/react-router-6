import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

export default function About() {
  return (
    <>
    
    <Header/>

    <h1>About page</h1>

    <ul>
      <li><Link to="/user/tanwir">Tanwir</Link></li>
      <li><Link to="/user/alam">Alam</Link></li>
    </ul>
    
    </>
  )
}
