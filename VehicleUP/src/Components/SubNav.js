import React from 'react';
import '../CSS/subnav.css';

const subNav = [
  { url: '/trending-boats', name: 'Boats' },
  { url: '/trending-cars', name: 'Cars' },
  { url: '/trending-motorcycles', name: 'Motorcycles' },
  { url: '/trending-airplanes', name: 'Airplanes' },
  { url: '/', name: 'All' },
];

export default function SubNav() {
  return (
    <div>
      <div className='all_Navbar_Container'>
        {/* -- Sub-Navbar -- */}
        {/* -- The navigation menu -- */}
        <div className='sub_navbar'>
          <a href='./likedvideos'>Liked Videos</a>
          <div className='subnav'>
            <button className='subnavbtn'>
              Playlist <i className='fa fa-caret-down'></i>
            </button>
            <div className='subnav-content'>
              <a href='./entireplaylist'>All</a>

              <a href='./favorite-playlist'>Favorite List</a>
            </div>
          </div>
          <div className='subnav'>
            <button className='subnavbtn'>
              Account <i className='fa fa-caret-down'></i>
            </button>
            <div className='subnav-content'>
              <a href='./myvideos'>My videos</a>

              <a href='./users'>My information</a>
            </div>
          </div>
          <div className='subnav'>
            <button className='subnavbtn'>
              Trending <i className='fa fa-caret-down'></i>
            </button>
            <div className='subnav-content'>
              {subNav.map((item, idx) => (
                <a key={idx} href={item.url}>
                  {item.name}
                </a>
              ))}
              {/* <a href='./trendingboats'>Boats</a>
              <a href='./trendingcars'>Cars</a>
              <a href='./trendingmotorcycles'>Motorcycles</a>
              <a href='./trendingairplanes'>Airplanes</a>
              <a href='./'>All</a> */}
            </div>
          </div>
          <a href='./history'>History</a>
        </div>
        {/* -- End of Sub-Navbar -- */}
      </div>
      {/* -- End of All Navbar Container -- */}
    </div>
  );
}
