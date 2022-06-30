import React , {useEffect, useState}from "react";
// import "./signup.css";

export default function EditProfile(props) {
    const{
      view_profile,
      edit_profile,
      profile

    }=props;

const [oldProfile, setOldProfile] = useState();


const [newProfile, setNewProfile] = useState(
    {
        name : "",
        email:"",
        phone_no:"",
        password:"",
        gender:"",
        caste:"",
        skills:"",
        college_name:""
    }
    )
    
    useEffect(() => {
        
        view_profile();
      
    
}, [])



    function onTextChange(e){
        setNewProfile({
            ...newProfile,
            [e.target.name]: e.target.value
        })
        console.log(newProfile)
    }



    
    return (


    <div className="signup">
      <div className="container  justify-content-center">
        <div className="signup-box ">
          <div className="row ">
            <div className="col-md-7">
              <div className="content">
                <h6>NAME</h6>
                <input
                //   type="email"
                  class="form-control signup-form"
                  placeholder={profile.user_profile.name}
                  
                  
                                    aria-label="Username"
                  aria-describedby="addon-wrapping"
                  name="name"
                  
                
                />
                <h6>EMAIL ID</h6>
                <input
                //   type="email"
                  class="form-control signup-form"
                  placeholder={profile.user_profile.email}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  name="email"
                //   value={profile.user_profile.email}
               onChange= {e => onTextChange(e)}
                />
                <h6>MOBILE NO</h6>
                <input
                //   type="email"
                  class="form-control signup-form"
                  placeholder={profile.user_profile.phone_no}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  name="mobile"
                //   value={profile.user_profile.phone_no}
                  onChange= {e => onTextChange(e)}
                />
                <h6>COLLEGE NAME</h6>
                <input
                //   type="email"
                  class="form-control signup-form"
                  placeholder={profile.user_profile.college_name}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  name="college_name"
                //   value={profile.user_profile.college_name}
                  onChange= {e => onTextChange(e)}
                />
                
                   <h6>SKILLS</h6>
                 <input
                //   type="email"
                  class="form-control signup-form"
                  placeholder={profile.user_profile.skills}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  name="skills"
                //   value={profile.user_profile.skills}
                  onChange= {e => onTextChange(e)}
                />
                <h6>CASTE</h6>
                <input
                //   type="email"
                  class="form-control signup-form "
                  placeholder={profile.user_profile.caste}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  name="caste"
                //   value={profile.user_profile.caste}
                  onChange= {e => onTextChange(e)}
                />
                 <h6>PASSWORD</h6>
                <input
                  type="password"
                  class="form-control signup-form "
                  placeholder={profile.user_profile.password}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  name="password"
                //   value={profile.user_profile.password}
                  onChange= {e => onTextChange(e)}
                  disabled
                
                />
                <h6>GENDER</h6>
                <input
                //   type="email"
                  class="form-control signup-form"
                  placeholder={profile.user_profile.gender}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  name="gender"
                //   value={profile.user_profile.gender}
                  onChange= {e => onTextChange(e)}
                />
                <button className="btn btn-primary"
                 onClick={()=>{
                    console.log("edit profile");
                edit_profile(newProfile)}
                }
                >Edit Profile
                    </button>
              </div>
            </div>
            <div className="col-md-5">
                <div className="side-img">

                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
