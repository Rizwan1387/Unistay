import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import RegistrationForm from '../components/RegistrationForm'
import SearchForm from '../components/SearchForm'

export default function Mainpage() {
  return (
    <div>
        <Home/>
        <About/>
        <RegistrationForm/>
        <SearchForm/>
      
    </div>
  )
}


