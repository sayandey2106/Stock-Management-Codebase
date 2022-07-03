import React, { useState } from "react";
import { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import LoaderEm from "../loader/loader_embed";
import "./login.css";
// import { LoaderCon } from "../../containers/loader/loader_cont";
// import loader_cont from "../../containers/loader/loader_cont";
// import { LoaderCon } from "../../containers/loader/loader_cont";
import Loader from "../loader/loader";
// import LoaderCont from "../containers/loader/loader_cont";
import Loader_cont from "../../containers/loader/loader_cont";

export default function Login(props) {
  useEffect(() => {
    clear_login();
    console.log(admin);
  }, []);

  const [Type, setType] = useState("password");
  // const [Eye, setEye] = useState("fa-eye");

  const [emailId, setemailId] = useState("");
  const [password, setpassword] = useState("");
const[admin, setAdmin]=useState();
  const {
    login,
    setEmail,
    setPwd,
    login_email,
    clear_login,
    snackbar,
    close_snack_bar,
    admin_login_email,
    loader
  } = props;

  if (login.user_id !== "") {
    return <Redirect to="/dashboard" />;
  }

  const handleToogle = () => {
    if (Type === "password") {
      setType("text");
    } else setType("password");
  };

  return (
    <div>{
      loader.openLoader===true? <Loader_cont/>:<></>}
   
     
      <section className="login-section">
        <div className="container d-flex text-center justify-content-center ">
          <div className="card login-card text-center ">
            <div class=" content">
              {/* for email */}
              <div className="d-flex text-center justify-content-center">
              <div class="form-check mx-3">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"

  onChange={()=>{
    setAdmin(true);
    console.log(admin)
  }}/>
  <h3>

  <label class="form-check-label" for="flexRadioDefault1" style={{color:"white"}}>
    Admin
  </label>
  </h3>
</div>

<div class="form-check mx-3">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" 
  onChange={()=>{
    setAdmin(false);
    console.log(admin)
  }}/>
  <h3>

  <label class="form-check-label" for="flexRadioDefault2" style={{color:"white"}}>
   Student
  </label>
  </h3>
</div>
              </div>
              <input
                type="email"
                class="form-control login-form mt-3"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                required
                value={login.email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                onKeyPress={(event) => {
                  if (
                    event.key === "Enter" &&
                    login.email !== "" &&
                    login.password !== ""
                  ) {
                    login_email(login);
                  }
                }}
              />

              <div class="input-group flex-nowrap">
                {/* for password */}
                <input
                  type={Type}
                  class="form-control login-form"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="addon-wrapping"
                  value={login.password}
                  onChange={(event) => {
                    setPwd(event.target.value);
                  }}
                  onKeyPress={(event) => {
                    if (
                      event.key === "Enter" &&
                      login.email !== "" &&
                      login.password !== ""
                    ) {
                      login_email(login);
                    }
                  }}
                />

                <span
                  class="input-group-text"
                  id="addon-wrapping"
                  onClick={handleToogle}
                >
                  {Type === "password" ? (
                    <i class="fa-solid fa-eye"></i>
                  ) : (
                    <i class="fa-solid fa-eye-slash"></i>
                  )}
                </span>
              </div>
              <div className="btn-grp">
                <div class="d-grid ">
                  <button
                    class="btn btn-primary sign-in-btn"
                    
                    type="button"
                    onClick={() => {

                      if(admin===true){
                        admin_login_email(login);
                      }
                      else if(admin===false) {
                        login_email(login);
                        
                      }
                      else{
                        alert("Plese Select a login type")
                      }


                    }}
                  >
                    Sign In
                  </button>
                </div>
                <div className="d-flex or">
                  <hr />
                  or <hr />
                </div>
                <div class="d-grid ">
                    <Link to="/signup/student">
                  <button class="btn btn-primary google my-3" type="button">

                    <img
                      class="google-icon mx-3"
                      // src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                      />
                   Creat A New Student Account
                  </button>
                      </Link>
                      <Link to="/signup/admin">
                  <button class="btn btn-primary google my-3" type="button">

                    <img
                      class="google-icon mx-3"
                      // src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                      />
                   Creat A New Admin Account
                  </button>
                      </Link>
                  {/* <button
                    class="btn btn-primary google justify-content-center text-center"
                    id="fb-in-btn"
                    type="button"
                  >
                    <img
                      class="google-icon mx-3"
                      src="https://www.freeiconspng.com/uploads/facebook-transparent-pics-18.png"
                    />
                    Sign in with Facebook
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
