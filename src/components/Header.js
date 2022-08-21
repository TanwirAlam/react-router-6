import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <ul>
        <li><NavLink style={({isActive})=>{return {color:isActive ? 'red' : ''}}} to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/user/tanwir" state={{name:'Tanwir Alam Hussain',age:45}}>User</NavLink></li>
        <li><NavLink to="/filter?name=Tanwir&age=30">Filter</NavLink></li>
        <li><NavLink to="/course">Course</NavLink></li>
        
      </ul>


    </div>
  )
}
