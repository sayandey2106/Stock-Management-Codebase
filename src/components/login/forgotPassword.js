import React, {useState} from 'react'
import { Link } from 'react-router-dom';
export default function ForgotPassword() {

    const [otp, setOtp] = useState(false);
    const [submitOtp, setSubmitOtp] = useState(false);
    const [Type, setType] = useState("password");
    const [Type1, setType1] = useState("password");
    const [newPassword, setNewPassword]= useState("");
    const [confirmPassword, setConfirmPassword]= useState("");
    const handleToogle = () => {
        if (Type === "password") {
          setType("text");
        } else setType("password");
      };
    const handleToogle1 = () => {
        if (Type1 === "password") {
          setType1("text");
        } else setType1("password");
      };
  return (
    <div>
              <section className={submitOtp===false ? "login-section" : "d-none"}>
        <div className="container d-flex text-center justify-content-center ">
          <div className="card login-card text-center ">
            <div class=" content">
              {/* for email */}
              <div className="d-flex text-center justify-content-center">
             </div>
              <input
                type="email"
                class="form-control login-form mt-3"
                placeholder="Enter registered email"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                required
              
               
              />

            <input
                type="number"
                
                placeholder="OTP"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                required
              className={otp===true ? "d-block form-control login-form mt-3":"d-none"}
               
              />

          
              <div className="btn-grp">
                <div class="d-grid ">
                  <button
                    class="btn btn-primary sign-in-btn"
                    type="button"
                    onClick={()=>{
                    
                        setOtp(true)
                    }}
                    >
                    GET OTP
                  </button>
                  <button
                    class={otp===true ? "d-block btn btn-success my-2":"d-none"}
                    type="button"
                    onClick={()=>{
                        setSubmitOtp(true)
                    }}
                    >
                    Submit OTP
                  </button>
                </div>
              
            
              </div>
            </div>
          </div>
        </div>
      </section>


                    {/* after submit otp */}

        <section className={submitOtp===true ? "d-block login-section": "d-none"}>
        <div className="container d-flex text-center justify-content-center ">
          <div className="card login-card text-center ">
            <div class=" content">
              {/* for email */}
              <div className="d-flex text-center justify-content-center">
             </div>
             <div class="input-group flex-nowrap">
                {/* for password */}
                <input
                  type={Type}
                  class="form-control login-form"
                  placeholder="New Password"
                  aria-label="Password"
                  aria-describedby="addon-wrapping"
               value={newPassword}
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
              <div class="input-group flex-nowrap">
                {/* for password */}
                <input
                  type={Type1}
                  class="form-control login-form"
                  placeholder="Confirm Password"
                  aria-label="Password"
                  aria-describedby="addon-wrapping"
               value={confirmPassword}
                />

                <span
                  class="input-group-text"
                  id="addon-wrapping"
                  onClick={handleToogle1}
                >
                  {Type1 === "password" ? (
                    <i class="fa-solid fa-eye"></i>
                  ) : (
                    <i class="fa-solid fa-eye-slash"></i>
                  )}
                </span>
              </div>
            

          
              <div className="btn-grp">
                <div class="d-grid ">
                  
                  <Link to="/">
                  <button
                    class={otp===true ? "d-block btn btn-success my-2":"d-none"}
                    
                    type="button"
                    >
                    Submit
                  </button>
                        </Link>
                </div>
              
            
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
