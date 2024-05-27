import React from 'react'
import './Header.css';

const Header = () => {// this is static routing
  return (//but this will not show in browser b coz app.jsx has been deleted 
  //so we have to write inside main app any Home orAbout 
  //that inside of home data will show in browser
  //and inside that home just import Header
  <>
    <div className="app">
        <h1>Header part</h1>
<nav>
    <ul> 
        <a href={'/'}>Home</a>
        <a href={'About-us'}>About</a>
        <a href={'Course'}>Course</a>
        <a href={'blog'}>Blog</a>
    </ul>
</nav>


    </div>
    </>
  )
}

export default Header