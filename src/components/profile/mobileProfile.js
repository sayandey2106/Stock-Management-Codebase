import React from 'react'
import Details from './details'
import './mobileProfile.css'


export default function MobileProfile() {
  return (
    <div className=''>
      <div class="container d-flex justify-content-center align-items-center">
             
    <div class="card card-mob">
      

  

     <div class="upper mobile">

       <img src="https://i.imgur.com/Qtrsrk5.jpg" class="img-fluid"/>
       
     </div>

     <div class="user text-center">

       <div class="profile">

         <img src="https://i.imgur.com/JgYD2nQ.jpg" class="rounded-circle" width="80"/>
         
       </div>

     </div>


     <div class="mt-5 text-center">

       <h4 class="mb-0">Benjamin Tims</h4>
       <span class="text-muted d-block mb-2">Los Angles</span>

       <button class="btn btn-primary btn-sm follow">Follow</button>


       <div class="d-flex justify-content-between align-items-center mt-4 px-4">

         <div class="stats">
           <h6 class="mb-0">Followers</h6>
           <span>8,797</span>

         </div>


         <div class="stats">
           <h6 class="mb-0">Projects</h6>
           <span>142</span>

         </div>


         <div class="stats">
           <h6 class="mb-0">Ranks</h6>
           <span>129</span>

         </div>
         
       </div>
       
     </div>
     <div className="text-center">


     <div class="text-center " id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row text-center
                                        justify-content-center">
                                            <div class="col-md-6">
                                                <label>User Id</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Sayan21</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Sayan Dey</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>sayandey2106@gmail.com</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>1234567890</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Web Developer and Designer</p>
                                            </div>
                                        </div>
                            </div>
                     
     </div>
    </div>

  </div>
  
  
  
  
  
  
  
  
  
  </div>
  )
}
