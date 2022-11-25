import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {faBars, faChartSimple } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <nav>
        <FontAwesomeIcon className='menu-bar' icon={faBars}></FontAwesomeIcon>
        <h2 className='title'>Verble</h2>
        <FontAwesomeIcon className='menu-chart' icon={faChartSimple}></FontAwesomeIcon>
    </nav>
  )
}

export default Nav