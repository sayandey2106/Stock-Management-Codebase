import React, { useState } from 'react'
import './desktopProfile.css'
import Details from './details'


export default function DesktopProfile(props) {


  const {
    profile,
    login,
    view_profile,
    edit_name, edit_college_name, edit_caste, edit_dob, edit_gender, edit_skills, edit_branch, edit_mobile, edit_photo } = props.data;


  const [display, setDisplay] = useState("d-none")
  const [button, setButton] = useState("d-block")
  const [name, setName] = useState("")
  const [value, setValue] = useState("");
  // const [disable,setDisable]= useState("false")


  return (

    <div className="desktop">

      <div class="container emp-profile ">
        <form>
          <div class="row">
            <div class="text-center">
              <div class="profile-img text-center ">
                {/* <img src={profile.user_profile.profile_pic} alt=""/> */}

                <h1 className='text-center'>
                  {localStorage.getItem("sre_name")}
                </h1>
                <div className='img-box text-center'>




                  {/* <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                              </div> */}

                  <img src="https://m.cricbuzz.com/a/img/v1/192x192/i1/c171004/sachin-tendulkar.jpg" alt="" />
                </div>

                <div class={display === "d-block" ? "input-group d-flex my-3" : "input-group d-none"}>
                  <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                  <button className="btn btn-success" onClick={() => {
                    // edit_profile(name,value)
                    edit_photo(value)
                    alert("Are you sure ?")
                    window.location.reload()
                  }
                  }>Upload</button>
                </div>
              </div>

              <div class="profile-head text-center">

                {/* <p class="proile-rating">RANKINGS : <span>8/10</span></p> */}

                <button className={"btn btn-secondary my-2"} type="button"
                  onClick={(e) => {
                    display === "d-none" ? setDisplay("d-block") : setDisplay("d-none")


                  }}
                >
                  Edit Profile
                </button>
              </div>
            </div>
            <div class="">
            </div>
            {/* <div class="col-md-2 text-center">
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div> */}
          </div>
          <div class="row">
            {/* <div class="col-md-4">
                        {/* <div class="skills card-1 card text-center" style={{marginTop: "60px"}}>
                            <div className='card-body'>    
                            <i class="fa-solid fab fa-graduation-cap"></i>
                            <h3>SKILLS</h3>
                           { profile.user_profile.education==="" ?<h5> Enter Your Skills</h5> : <h5> {profile.user_profile.education}</h5>
                           }
                           </div>
                           <div className= {'edit ' + display}>
                      <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"
                        name={name}
                        
                        onChange={(e)=>{
                          setValue(e.target.value);
                          setName("dob")
                          console.log(value)
                        }}
                        
                        />
                        <label for="floatingInput">Skills</label>
                      </div>
                      <button className="btn btn-success" type="button" onClick={()=>
                      {
                        edit_dob(value)
                        alert("Are you sure?")
                        window.location.reload()
                      }
                      }>
                        
                            Submit
                      </button>
                    </div>
                        </div> */}
            {/* </div> */}
            <div class="col-md-12">
              <div class="profile-tab text-center" id="myTabContent">
                <div className="card1 row">


                  <section className="col-lg-12 col-md-12 " style={{ marginTop: "60px" }}>

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
                                <div className={'edit ' + display}>
                                  <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"
                                      name={name}
                                      disabled

                                      onChange={(e) => {
                                        setValue(e.target.value);
                                        setName("caste")
                                        console.log(value)
                                      }}

                                    />
                                    <label for="floatingInput">Email</label>
                                  </div>
                                  <button className="btn btn-success" disabled type="button" onClick={() => {
                                    edit_caste(value)
                                  }
                                  }>

                                    Submit
                                  </button>
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
                              <div className={'edit ' + display}>
                                <div class="form-floating mb-3">
                                  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"
                                    name={name}

                                    onChange={(e) => {
                                      setValue(e.target.value);
                                      setName("branch")
                                      console.log(value)
                                    }}

                                  />
                                  <label for="floatingInput">Mobile Number</label>
                                </div>

                                <button
                                  className="btn btn-success" onClick={() => {
                                    // edit_profile(name,value)
                                    edit_mobile(value)
                                    alert("Are you sure ?")
                                    window.location.reload()
                                  }
                                  }>

                                  Submit
                                </button>
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
                                    profile.user_profile.college_name ? <h6>{profile.user_profile.college_name}</h6> : <h6>Enter Your College Name</h6>
                                  }

                                  {/* <h6>278</h6> */}
                                </div>
                                <div className={'edit ' + display}>
                                  <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"
                                      name={name}

                                      onChange={(e) => {
                                        setValue(e.target.value);
                                        setName("college_name")
                                        console.log(value)
                                      }}

                                    />
                                    <label for="floatingInput">College Name</label>
                                  </div>
                                  <button className="btn btn-success" onClick={() => {
                                    // edit_profile(name,value)
                                    edit_college_name(value)
                                    alert("Are you sure ?")
                                    window.location.reload()
                                  }
                                  }>

                                    Submit
                                  </button>
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
                                    profile.user_profile.branch_name ? <h6>{profile.user_profile.branch_name}</h6> : <h6>Enter Your Branch Name</h6>
                                  }
                                  {/* 
    <h6>278</h6> */}
                                </div>
                                <div className={'edit ' + display}>
                                  <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"
                                      name={name}

                                      onChange={(e) => {
                                        setValue(e.target.value);
                                        setName("branch")
                                        console.log(value)
                                      }}

                                    />
                                    <label for="floatingInput">Branch</label>
                                  </div>
                                  <button className="btn btn-success" onClick={() => {
                                    // edit_profile(name,value)
                                    edit_branch(value);
                                    alert("Are you sure ?")
                                    window.location.reload()
                                  }
                                  }>

                                    Submit
                                  </button>
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
                                    profile.user_profile.caste ? <h6>{profile.user_profile.caste}</h6> : <h6>Enter Your Caste</h6>
                                  }

                                  {/* <h6>278</h6> */}
                                </div>
                                <div className={'edit ' + display}>
                                  <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"
                                      name={name}

                                      onChange={(e) => {
                                        setValue(e.target.value);
                                        setName("caste")
                                        console.log(value)
                                      }}

                                    />
                                    <label for="floatingInput">Caste</label>
                                  </div>
                                  <button className="btn btn-success"  onClick={() => {
                                    edit_caste(value);
                                    alert("Are you sure ?");
                                    window.location.reload()
                                  }
                                  }>

                                    Submit
                                  </button>
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
                                    profile.user_profile.dob ? <h6>{profile.user_profile.dob}</h6> : <h6>Enter Your Date of birth</h6>
                                  }

                                  {/* <h6>278</h6> */}
                                </div>
                                <div className={'edit ' + display}>
                                  <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"
                                      name={name}

                                      onChange={(e) => {
                                        setValue(e.target.value);
                                        setName("dob")
                                        console.log(value)
                                      }}

                                    />
                                    <label for="floatingInput">Date Of Birth</label>
                                  </div>
                                  <button className="btn btn-success"  onClick={() => {
                                    edit_dob(value)
                                    alert("Are you sure ?")
                                   
                                  }

                                  }>

                                    Submit
                                  </button>
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
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

