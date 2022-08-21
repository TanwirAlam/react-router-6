import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Course() {
  return (
    <>
        <h2>Our Courses Lists</h2>

        <ol>
            <li><Link to="/course/math">Math</Link></li>
            <li><Link to="/course/science">Science</Link></li>
        </ol>
        <Outlet/>
    </>
  )
}
