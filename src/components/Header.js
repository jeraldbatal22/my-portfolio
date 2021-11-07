import React from 'react'
import '../components/Header.css'

const Header = () => {
  return (
    <header className="header_nav">
      <div className="header_container">
        <h1>JeraldDev</h1>
        <ul>
          <li><a href="#App">Home</a></li>
          <li><a href="#aboutContainer">About</a></li>
          <li><a href="#project_container">Project</a></li>
          <li><a href="#App">Contact</a></li>
        </ul>
      </div>
      <div className="header_mobile_container">
        <h1>JeraldDev</h1>
        <li><a href="/">#</a></li>
      </div>
    </header>
  )
}

export default Header