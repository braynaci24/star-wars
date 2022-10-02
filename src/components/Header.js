import React from 'react'
import Logo from '../components/star-wars-logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div id="header">
        <div>
            <img src={Logo} style={{width: "150px"}} alt=""/>
        </div>
        <div className='menu-item-container'>
            <ul className='menu-item-list'>
                <li>
                    <a href="/" className='menu-item-list-item'>People</a>
                </li>
                <li>
                    <Link to="/films" className='menu-item-list-item'>Films</Link>
                </li>
                <li>
                    <a href="/" className='menu-item-list-item'>Starships</a>
                </li>
                <li>
                    <a href="/" className='menu-item-list-item'>Planets</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header