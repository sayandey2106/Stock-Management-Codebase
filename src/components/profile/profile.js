import React, {useEffect} from 'react'
import DesktopProfile from './desktopProfile'
import MobileProfile from './mobileProfile'

export default function Profile(props) {

  useEffect(() => {
    
props.view_profile(props.login.user_id);  
  }, [])
  
  return (
    <div>

      <div className='desktop-profile'>

        <DesktopProfile data={props}/>
      </div>
    
    </div>
  )
}
