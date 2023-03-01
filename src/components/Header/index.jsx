import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../../constants/routes';
import './Header.css'

function Header() {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(HOME_ROUTE)} className='header'>
      <h1>EVENTIFY</h1>
    </div>
  )
}

export default Header