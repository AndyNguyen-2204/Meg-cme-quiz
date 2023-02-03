import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/svg/logo'
export default function Welcome() {
  return (
    <div className='wrap_welcome_page'>
      <div className='logo'>
        <Logo/>
      </div>
      <div className='content_welcome_page'>
       <div className='content_welcome_page_inner'>
       <span className='first_text'>Take the</span>
        <p>Critical Minerals to <br/>Modern Life quiz</p>
       </div>
        <Link to="/splash">
        <button className='button_welcome_page'>Play Now!</button>
        </Link>
      </div>
    </div>
  )
}
