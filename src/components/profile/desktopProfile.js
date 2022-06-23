import React from 'react'
import './desktopProfile.css'
import Details from './details'


export default function DesktopProfile(props) {


const{
    profile,
    login,
    view_profile
} = props.data;





    return (
         
         <div className="desktop">

<div class="container emp-profile ">
            <form>
                <div class="row">
                    <div class="text-center">
                        <div class="profile-img text-center d-flex">
                            {/* <img src={profile.user_profile.profile_pic} alt=""/> */}
                            <div className='img-box text-center'>

                            <img src="https://m.cricbuzz.com/a/img/v1/192x192/i1/c171004/sachin-tendulkar.jpg"alt=""/>
                            {/* <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div> */}
                            </div>
                        </div>
                        <div class="profile-head text-center">
                                    <h1>
                                   {profile.user_profile.name}
                                    </h1>
                                    <h6>
                                    {profile.user_profile.education}
                                    </h6>
                                    {/* <p class="proile-rating">RANKINGS : <span>8/10</span></p> */}
                            
                        </div>
                    </div>
                    <div class="">
                    </div>
                    {/* <div class="col-md-2 text-center">
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div> */}
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="skills card-1 card text-center" style={{marginTop: "60px"}}>
                            <div className='card-body'>    
                            <i class="fa-solid fab fa-graduation-cap"></i>
                            <h3>SKILLS</h3>
                           { profile.user_profile.education==="" ?<h5> Enter Your Skills</h5> : <h5> {profile.user_profile.education}</h5>
                           }

                            {/* <p>Abcd 12354</p>
                            <p>Abcd 12354</p>
                            <p>Abcd 12354</p>
                            <p>Abcd 12354</p> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="profile-tab text-center" id="myTabContent">
                            <Details data={props.data}/>
                         
                                 
                        </div>
                    </div>
                </div>
            </form>           
        </div>
         </div>
    )
}

