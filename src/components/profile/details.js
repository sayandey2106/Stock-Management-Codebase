import React from "react";
import "./desktopProfile.css";
export default function Details(props) {

  const{
    profile,
    login,
    view_profile
  } = props.data;

  




  return (
    <div>
  <div className="card1 row">
  

  <section className="col-lg-12 col-md-12 " style={{marginTop:"60px"}}>
  
    <div class="row ">
    <div class="col-xl-> col-sm-6 col-md-4 col-12 mt-2"> 
  <div class="card details-card">
    <div class="card-content">
      <div class="card-body">
        <div class="media d-flex row">
          <div class="align-self-center col-md-3">
            {/* <i class="icon-pencil primary font-large-2 float-left"></i> */}
            <i class="fa-solid fa-envelope fab"></i>
          </div>
          <div class="media-body text-right col-md-9">
            <span>Email Id</span>
            <h6>{profile.user_profile.email}
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
    <div class="col-xl-> col-sm-6 col-md-4 col-12 mt-2"> 
  <div class="card details-card">
    <div class="card-content">
      <div class="card-body">
        <div class="media d-flex row">
          <div class="align-self-center col-md-3">
          <i class="fa-solid fa-phone fab"></i>
          </div>
          <div class="media-body text-right col-md-9">
            <span>Mobile No.</span>
            <h6>{profile.user_profile.phone_no}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="col-xl-> col-sm-6 col-md-4 col-12 mt-2"> 
  <div class="card details-card">
    <div class="card-content">
      <div class="card-body">
        <div class="media d-flex row">
          <div class="align-self-center col-md-3">
          <i class="fa-solid fa-building-columns fab"></i>
          </div>
          <div class="media-body text-right col-md-9">
            <span>College Name</span>
{
  profile.user_profile.college_name ? <h6>{profile.user_profile.college_name}</h6>:<h6>Enter Your College Name</h6>
}

            {/* <h6>278</h6> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="col-xl-> col-sm-6 col-md-4 col-12 mt-2"> 
  <div class="card details-card">
    <div class="card-content">
      <div class="card-body">
        <div class="media d-flex row">
          <div class="align-self-center col-md-3">
          <i class="fa-solid fa-code-branch fab"></i>
          </div>
          <div class="media-body text-right col-md-9">
<span>Branch</span>
          {
  profile.user_profile.branch ? <h6>{profile.user_profile.branch}</h6>:<h6>Enter Your Branch Name</h6>
}
{/* 
            <h6>278</h6> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="col-xl-> col-sm-6 col-md-4 col-12 mt-2"> 
  <div class="card details-card">
    <div class="card-content">
      <div class="card-body">
        <div class="media d-flex row">
          <div class="align-self-center col-md-3">
            <i class="fa-solid fa-certificate fab"></i>
          </div>
          <div class="media-body text-right col-md-9">
            <span>Caste</span>
          {
  profile.user_profile.caste ? <h6>{profile.user_profile.caste}</h6>:<h6>Enter Your Caste</h6>
}

            {/* <h6>278</h6> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="col-xl-> col-sm-6 col-md-4 col-12 mt-2"> 
  <div class="card details-card">
    <div class="card-content">
      <div class="card-body">
        <div class="media d-flex row">
          <div class="align-self-center col-md-3">
          <i class="fa-solid fab fa-cake-candles"></i>
          </div>
          <div class="media-body text-right col-md-9">
            <span>Date Of Birth</span>
          {
  profile.user_profile.dob ? <h6>{profile.user_profile.dob}</h6>:<h6>Enter Your Date of birth</h6>
}

            {/* <h6>278</h6> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  </section>
 
</div>
    </div>
  );
}
