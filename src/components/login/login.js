import React, { useState} from "react";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./login.css";
export default function Login(props) {


useEffect(() => {
  
clear_login();
 
}, [])



  
  const [Type, setType] = useState("password");
  // const [Eye, setEye] = useState("fa-eye");

  const [emailId, setemailId] = useState("");
  const [password, setpassword] = useState("");

  const { login, setEmail, setPwd, login_email, clear_login, snackbar, close_snack_bar } =
    props;

  if (login.user_id !== "") {
    return <Redirect to="/dashboard" />;
  }

  const handleToogle = () => {
    if (Type === "password") {
      setType("text");
    } else setType("password");
  };

 
  
  return (
    <div>
      <section>
        <div className="container d-flex text-center justify-content-center ">
          <div className="card text-center ">
            <div class=" content">
              {/* for email */}
              <input
                type="email"
                class="form-control mt-3"
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
                  class="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="addon-wrapping"
                  value={login.password}
                  onChange={(event) => {
                    setPwd(event.target.value);
                  }}
                  onKeyPress={event => {
                    if (event.key === 'Enter' && login.email !== "" && login.password !== "") {
                      login_email(login)
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
                    class="btn btn-primary"
                    id="sign-in-btn"
                    type="button"
                    onClick={() => { login_email(login) }}
                  >
                    Sign In
                  </button>
                </div>
                <div className="d-flex or">
                  <hr />
                  or <hr />
                </div>
                <div class="d-grid ">
                  <button class="btn btn-primary google" type="button">
                    <img
                      class="google-icon mx-3"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    />
                    Sign in with Google
                  </button>
                  <button
                    class="btn btn-primary google justify-content-center text-center"
                    id="fb-in-btn"
                    type="button"
                  >
                    <img
                      class="google-icon mx-3"
                      src="https://www.freeiconspng.com/uploads/facebook-transparent-pics-18.png"
                    />
                    Sign in with Facebook
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
