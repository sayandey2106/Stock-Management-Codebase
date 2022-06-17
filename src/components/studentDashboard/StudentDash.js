import React from "react";
import "./style.css";
// import { Link } from 'react-router-dom'

function StudentDash() {
  return (
    
    <section className="grey-bg">
    <div className="container">
      {/* Button LOGOUT */}
     
  

      {/* DETAILED CARDS */}
      <div className="card1 row">
  

        <section className="col-lg-8 col-md-7 " style={{marginTop:"60px"}}>
          <h3 className="exam-head text-center my-3">Exam Summary</h3>
          <div class="row ">
          <div class="col-xl->col-sm-6 col-md-4 col-12 mt-2"> 
        <div class="card card-1">
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center">
                  <i class="icon-pencil primary font-large-2 float-left"></i>
                </div>
                <div class="media-body text-right">
                  <h3>278</h3>
                  <span>Attended Test</span>
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
              <div class="media d-flex">
                <div class="align-self-center">
                  <i class="icon-pencil primary font-large-2 float-left"></i>
                </div>
                <div class="media-body text-right">
                  <h3>278</h3>
                  <span>Pending Test</span>
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
              <div class="media d-flex">
                <div class="align-self-center">
                  <i class="icon-pencil primary font-large-2 float-left"></i>
                </div>
                <div class="media-body text-right">
                  <h3>278</h3>
                  <span>Absent</span>
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
              <div class="media d-flex">
                <div class="align-self-center">
                  <i class="icon-pencil primary font-large-2 float-left"></i>
                </div>
                <div class="media-body text-right">
                  <h3>278</h3>
                  <span>Average Score</span>
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
              <div class="media d-flex">
                <div class="align-self-center">
                  <i class="icon-pencil primary font-large-2 float-left"></i>
                </div>
                <div class="media-body text-right">
                  <h3>278</h3>
                  <span>Passed Test</span>
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
              <div class="media d-flex">
                <div class="align-self-center">
                  <i class="icon-pencil primary font-large-2 float-left"></i>
                </div>
                <div class="media-body text-right">
                  <h3>278</h3>
                  <span>Failed Tests</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </section>
        <section className="sidebar col-lg-4 col-md-4 " style={{marginTop:"60px"}}>
          <h3 className="exam-head text-center my-3">Notice Board</h3>
          <div className="notice-cont card mt-2"></div>
        </section>
      </div>

      {/* EXAM HISTORY */}
      <section className="" style={{marginTop:"70px"}}>

      <h3 className="exam-history-head text-center my-3" >Exam History</h3>
      <table class="table-light table table-striped">
  <thead>
    <tr>
      <th scope="col">Subject</th>
      <th scope="col">Rank</th>
      <th scope="col">Score</th>
      <th scope="col">Grade</th>
      <th scope="col">Time Spent</th>
      <th scope="col">Submitted/Timeout</th>
      <th scope="col">Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
   
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
     
    </tr>
  </tbody>
</table>
      </section>
      </div>
    </section>
  );
}

export default StudentDash;
