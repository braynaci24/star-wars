import React from 'react'
import Logo from '../components/star-wars-logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div id="header">
        <a href="/">
            <img src={Logo} style={{width: "150px"}} alt=""/>
        </a>
        <div className='menu-item-container'>
            <ul className='menu-item-list'>
                <li>
                    <a href="/" className='menu-item-list-item'>People</a>
                </li>
                <li>
                    <Link to="/films" className='menu-item-list-item'>Films</Link>
                </li>
                <li>
                    <Link to="/starships" className='menu-item-list-item'>Starships</Link>
                </li>
                <li>
                    <Link to="/planets" className='menu-item-list-item'>Planets</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header