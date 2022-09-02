import React , {useState} from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import "./signup.css";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
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
        signup,
        get_profile_pic_link
        
    }=props;
    
    console.log("props", props);
    const history = useHistory();
    const [img, setimg] = useState()
    useEffect(()=>{
      createCaste("1");
    
    },[])

const handleSignUp = () =>{



if(signup.name==="" || signup.email==="" || signup.college_name==="" || signup.caste==="" || signup.gender==="" || signup.password===""){
  alert("input all data");

}
else if(signup.profile_img===""){
    alert("please upload profile photo")
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
              <form>

               <h6>NAME</h6>
                <input
                  type="text"
                  class="form-control signup-form"
                  placeholder="NAME"
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
                  placeholder="EMAIL ID"
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
                  placeholder="MOBILE NUMBER"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  required
                  value={signup.phone}
                  onChange={(event) => {
                    createPhone(event.target.value);
                  }}
                />
                
                 <h6>PASSWORD</h6>
                <input
                  type="password"
                  class="form-control signup-form "
                  placeholder="PASSWORD"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  required
                  value={signup.password}
                  onChange={(event) => {
                    createPassword(event.target.value);
                  }}
                />    
                
                         
                  <h6>ID PROOF</h6>
                     <div class="input-group mb-3">

  <div class="custom-file">
    <input type="file" class="custom-file-input my-1" id="inputGroupFile01"  onChange={(e)=>{
                
                setimg((e.target.files[0]));
console.log(img)
              }}/>
   {/* <label class="custom-file-label" for="inputGroupFile01">Choose file</label>  */}
     <button class=" btn btn-warning my-1" onClick={()=>{
      get_profile_pic_link(img,signup.name)
    }}>Upload</button>
  </div>
</div>
                <button className="btn btn-primary my-2"
                type="submit"
                  onClick= {handleSignUp}
                >Sign Up
                    </button>
                    <Link to="/">
                    <h4
                      className="my-1"
                      style={{ color: "black", fontSize:"20px", textDecoration: "underline" }}
                    >
                      Already have an account
                    </h4>
                  </Link>
           
              </form>
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
