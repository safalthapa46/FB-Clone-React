// import { Feed } from '@mui/icons-material'
import React from 'react'
import Center from '../componensts/Center/Center'
import Left from '../componensts/Left/Left'
import Navbar from '../componensts/Navbar/Navbar'
import Right from '../componensts/Rightbar/Right'


import './Home.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='main-home'>
        <Left />
        <Center />
        <Right />
      </div>
    </div>
  )
}

export default Home
