import { useState } from 'react'
import Logo from './assets/images/avatar-jessica.jpeg'

import './App.css'

function App() {

  return (
    <>
      <div className='container'>
        <div className='img-container'>

        <img src={Logo} alt="log." />
        </div>
        <h2>Jessica Randall</h2>
        <p className='green-p'>London, United Kingdom</p>
        <p>"Front-end developer and avid reader."</p>
        <ul className='ul-items'>
          <li>GitHub</li>
          <li>Frontend Mentor</li>
          <li>Linkedin</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
    </>
  )
}

export default App
