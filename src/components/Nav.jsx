import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {faBars, faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
const Nav = ({menuActive,setMenuActive,statsActive,setStatsActive}) => {
  const handleMenu = () => {
    setMenuActive(prev=> !prev);
  }  
  const handleStats = () => {
    setStatsActive(prev=> !prev);
  }
  useEffect(() => {
    if(statsActive || menuActive){
      document.body.style.overflow = 'hidden';
    } 
    else if (!statsActive && !menuActive){
      document.body.style.overflow = 'unset';
    }
  }, [statsActive, menuActive]);


  return (
    <nav>
      <div className='nav-container'>
        <FontAwesomeIcon 
            className='menu-bar' 
            icon={faBars}
            onClick={handleMenu}
        ></FontAwesomeIcon>
        <h2 className='title'>Verble</h2>
        <FontAwesomeIcon 
            className='menu-chart' 
            icon={faChartSimple}
            onClick={handleStats}
        ></FontAwesomeIcon>
      </div>
    </nav>
  )
}

export default Nav