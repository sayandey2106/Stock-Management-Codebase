import React from 'react'
import DesktopProfile from './desktopProfile'
import MobileProfile from './mobileProfile'

export default function Profile(props) {
  return (
    <div>

      <div className='desktop-profile'>

        <DesktopProfile data={props}/>
      </div>
    
    </div>
  )
}
