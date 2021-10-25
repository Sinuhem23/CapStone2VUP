import React from 'react';
import '../CSS/nav.css';
import Logo from '../images/gears.png';

// import SearchBar from './SearchBar';

export default function Nav() {
  return (
    <div>
      {/* --Navbar   -- */}
      <nav className='nav'>
        <div>
          <a href='/'>
            <img className='icon-1' alt='VehicleUP Logo' src={Logo}></img>
          </a>
        </div>
        <h1 className='website_name'>
          <span>V</span>ehicle <span>U</span>ploads
        </h1>
        {/* <SearchBar /> */}
        <div className='icon-2'>
          <h3>
            <a href='/'>Home</a>
          </h3>
        </div>
        <div className='icon-3'>
          <h3>
            <a href='/login'>Login</a>
          </h3>
        </div>
      </nav>
      {/* -- End of Navbar -- */}
    </div>
  );
}
