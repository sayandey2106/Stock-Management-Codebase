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
      {/* <table class="table table-striped"> */}
        {/* <thead>
    <tr>

      <th scope="col">First</th>
      <th scope="col">Last</th>
     
    </tr>
  </thead> */}
        {/* <tbody>
          <tr>
            <th scope="row">User ID</th>
            <td>abcd@23</td>
          </tr>
          <tr>
            <th scope="row">Name</th>
            <td>{profile.user_profile.name}</td>
          </tr>
          <tr>
            <th scope="row">Email ID</th>
            <td>jacob@fbai.com</td>
          </tr>
          <tr>
            <th scope="row">Phone No.</th>
            <td>1234567890</td>
          </tr>
        </tbody>
      </table> */}

<div className="card1 row">
  

  <section className="col-lg-12 col-md-12 " style={{marginTop:"60px"}}>
  
    <div class="row ">
    <div class="col-xl-> col-sm-6 col-md-4 col-12 mt-2"> 
  <div class="card card-1">
    <div class="card-content">
      <div class="card-body">
        <div class="media d-flex row">
          <div class="align-self-center col-md-3">
            {/* <i class="icon-pencil primary font-large-2 float-left"></i> */}
            <i class="fa-solid fa-envelope fab"></i>
          </div>
          <div class="media-body text-right col-md-9">
            <h3>278</h3>
            <span>Email Id</span>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
    <div class="col-xl-> col-sm-6 col-md-4 col-12 mt-2"> 
  <div class="card card-1">
    <div class="card-content">
      <div class="card-body">
        <div class="media d-flex row">
          <div class="align-self-center col-md-3">
          <i class="fa-solid fa-phone fab"></i>
          </div>
          <div class="media-body text-right col-md-9">
            <h3>278</h3>
            <span>Mobile No.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="col-xl-> col-sm-6 col-md-4 col-12 mt-2"> 
  <div class="card card-1">
    <div class="card-content">
      <div class="card-body">
        <div class="media d-flex row">
          <div class="align-self-center col-md-3">
          <i class="fa-solid fa-building-columns fab"></i>
          </div>
          <div class="media-body text-right col-md-9">
            <h3>278</h3>
            <span>College Name</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="col-xl-> col-sm-6 col-md-4 col-12 mt-2"> 
  <div class="card card-1">
    <div class="card-content">
      <div class="card-body">
        <div class="media d-flex row">
          <div class="align-self-center col-md-3">
          <i class="fa-solid fa-code-branch fab"></i>
          </div>
          <div class="media-body text-right col-md-9">
            <h3>278</h3>
            <span>Branch</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="col-xl-> col-sm-6 col-md-4 col-12 mt-2"> 
  <div class="card card-1">
    <div class="card-content">
      <div class="card-body">
        <div class="media d-flex row">
          <div class="align-self-center col-md-3">
            <i class="fa-solid fa-certificate fab"></i>
          </div>
          <div class="media-body text-right col-md-9">
            <h3>278</h3>
            <span>Caste</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="col-xl-> col-sm-6 col-md-4 col-12 mt-2"> 
  <div class="card card-1">
    <div class="card-content">
      <div class="card-body">
        <div class="media d-flex row">
          <div class="align-self-center col-md-3">
          <i class="fa-solid fab fa-cake-candles"></i>
          </div>
          <div class="media-body text-right col-md-9">
            <h3>278</h3>
            <span>Date Of Birth</span>
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
