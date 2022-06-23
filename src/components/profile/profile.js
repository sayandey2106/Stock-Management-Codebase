import React, {useEffect} from 'react'
import DesktopProfile from './desktopProfile'
import MobileProfile from './mobileProfile'
import Loader_cont from "../../containers/loader/loader_cont";
export default function Profile(props) {

  useEffect(() => {
    
props.view_profile(props.login.user_id);  
  }, [])
  
  return (
    <div>

      <div className='desktop-profile'>

        <DesktopProfile data={props}/>
        <Loader_cont/>
      </div>
    
    </div>
  )
}
