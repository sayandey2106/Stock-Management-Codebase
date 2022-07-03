import React,{useState} from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import "./signup.css";
import { Navigate } from "react-router-dom";
import { admin_sign_up } from "../../actions/signup/signupAction";
export default function AdminSignup(props) {
    const{

        createEmailAdmin,
  
        createPasswordAdmin,
        createPhoneAdmin,
        createProfilePicAdmin,
     
        createNameAdmin,
        sign_up,
        createType,
        adminSignup
        
    }=props;
    
    console.log("props", props);
    const history = useHistory();

const [img, setimg] = useState()

const handleSignUp = () =>{

console.log("hendle sign up");

if(adminSignup.name==="" || adminSignup.email===""  || adminSignup.password===""  || adminSignup.phone_no===""){
  alert("something wrong");

}
else{

 
  admin_sign_up(adminSignup)

 
  // history.push('/');
  


}





}


    return (


    <div className="signup-admin">
      <div className="container  justify-content-center">
        <div className="signup-box ">
          <div className="row ">
            <div className="col-md-7">

             
              <div className="content ">
              
                <h6>NAME</h6>
                <input
                  type="text"
                  class="form-control signup-form"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  required
                  value={adminSignup.name}
                  onChange={(event) => {
                    createNameAdmin(event.target.value);
                  }}
                />
                <h6>EMAIL ID</h6>
                <input
                  type="email"
                  class="form-control signup-form"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  required
                  value={adminSignup.email}
                  onChange={(event) => {
                    createEmailAdmin(event.target.value);
                  }}
                />
                <h6>MOBILE NO</h6>
                <input
                  type="number"
                  class="form-control signup-form"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  required
                  value={adminSignup.phone}
                  onChange={(event) => {
                    createPhoneAdmin(event.target.value);
                  }}
                />
              
               
                 <h6>PASSWORD</h6>
                <input
                  type="password"
                  class="form-control signup-form "
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  required
                  value={adminSignup.password}
                  onChange={(e) => {
                  createPasswordAdmin(e.target.value)
                  }}
                />    
                  <h6>PROFILE</h6>
                <input
                required
                type="file"
                value={adminSignup.profile_pic}
                onChange={(e)=>{
                
                  createProfilePicAdmin(URL.createObjectURL(e.target.files[0]));
                }}
                >
                
                </input>
                
               
                <button className="btn btn-primary"
                type="button"
                  onClick= {handleSignUp}
                >Sign Up
                    </button>
                    <Link to="/">
                    <button className="btn btn-primary mx-1"
                type="button"
                
                >Already An User
                    </button>
                </Link>
           
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
