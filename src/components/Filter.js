import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Filter() {
    const [searchParams,setSearchParams]=useSearchParams();
  return (
    <>
      <h2>Filter</h2>
      <h2>Name : {searchParams.get('name')}</h2>
      <h2>Age : {searchParams.get('age')}</h2>

      <button onClick={()=>setSearchParams({name:'Hussain',age:32})}>Set Params</button>
    </>
  )
}
