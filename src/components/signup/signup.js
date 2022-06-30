import React from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import "./signup.css";
import { Navigate } from "react-router-dom";
export default function Signup(props) {
    const{
        createCaste,
        createCollege,
        createEmail,
        createGender,
        createPassword,
        createPhone,
        createProfilePic,
        createSkills,
        createName,
        sign_up,
        createType,
        signup
        
    }=props;
    
    console.log("props", props);
    const history = useHistory();

const handleSignUp = () =>{

console.log("hendle sign up");

if(signup.name==="" || signup.email==="" || signup.college_name==="" || signup.caste==="" || signup.gender==="" || signup.password===""){
  alert("something wrong");

}
else{
  sign_up(signup);

 
  history.push('/');
  


}





}


    return (


    <div className="signup">
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
                  value={signup.name}
                  onChange={(event) => {
                    createName(event.target.value);
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
                  value={signup.email}
                  onChange={(event) => {
                    createEmail(event.target.value);
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
                  value={signup.phone}
                  onChange={(event) => {
                    createPhone(event.target.value);
                  }}
                />
                <h6>COLLEGE NAME</h6>
                <input
                  type="text"
                  class="form-control signup-form"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  required
                  value={signup.college}
                  onChange={(event) => {
                    createCollege(event.target.value);
                  }}
                />
                <h6>TYPE</h6>
                <input
                  type="text"
                  class="form-control signup-form"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  required
                  value={signup.type}
                  onChange={(event) => {
                    createType(event.target.value);
                  }}
                />
                  
                <h6>CASTE</h6>
                <input
                //   type="email"
                  class="form-control signup-form "
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  required
                  value={signup.caste}
                  onChange={(event) => {
                    createCaste(event.target.value);
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
                  value={signup.password}
                  onChange={(event) => {
                    createPassword(event.target.value);
                  }}
                />
                <h6>GENDER</h6>
                <input
                  type="text"
                  class="form-control signup-form"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  required
                  value={signup.gender}
                  onChange={(event) => {
                    createGender(event.target.value);
                  }}
                />
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
