import React from 'react'
import Disorders from './Disorders'
import ContactUs from './DailyNotes'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../App'


function Home() {

  return (
    <div className='home'>
      <h1>Health Tracker App</h1>
      <img className='homeImage'
        src="https://i.kym-cdn.com/photos/images/original/000/679/161/255.jpg" width="800" height="440" />

    </div>
  )
}

export default Home