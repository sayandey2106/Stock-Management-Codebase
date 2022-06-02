import React from "react";
import "./style.css";

// import { Link } from 'react-router-dom'

function StudentDash() {
  return (
    <div className="container">

      {/* Button LOGOUT */}
      <div className="log-out">
          <div className="dropdown">
            <button className="dropbtn">User Name</button>
            <div className="dropdown-content">
            <a href="/" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-user align-middle me-1"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>{" "}
              Profile
            </a>
            <a href="/" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-power align-middle me-1"
              >
                <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                <line x1="12" y1="2" x2="12" y2="12"></line>
              </svg>
              Log out
            </a>
              <a href="/">Link 3</a>
            </div>
          </div>
      </div>

      {/* DETAILED CARDS */}
      <div className="card1">
        <section className="profile_card">
          <div className="stuName">
            <img src={require("./images/nobita.jpeg")} alt="" />
            <div className="name">
              <h4>Name : Full Name</h4>
              <h4>Student ID : 5676864546</h4>
              <h4>Email : Something@mail</h4>
              <h4>Contact : 9080879888</h4>
            </div>
          </div>
          <div className="details">
            <h3>Credits <span>:</span></h3>
            <h3>Percentage <span>:</span></h3>
            <h3>CGPA <span>:</span></h3>
            <h3>SGPA <span>:</span></h3>
          </div>
        </section>

        <section className="progress">
          <h3 className="exam-head">Exam Summary</h3>
          <div className="analys">
            <div className="attend shadow cardsize">
              <div className="attended">
                <img src={require("../images/Totalstu.png")} alt="" />
                <h6 className="special-head">Attended Tests</h6>
              </div>
              <h4>25</h4>
            </div>
            <div className="pending shadow cardsize">
              <div className="pending-test special">
                <img
                  className="special-img"
                  src={require("../images/pending.png")}
                  alt=""
                />
                <h6 className="special-head">Pending Tests</h6>
              </div>
              <h4 className="speacial-head2">25</h4>
            </div>
            <div className="absent shadow cardsize">
              <div className="abstenty special">
                <img
                  className="special-img"
                  src={require("../images/absent.png")}
                  alt=""
                />
                <h6 className="special-head">Absenty</h6>
              </div>
              <h4 className="speacial-head2">25</h4>
            </div>
            <div className="score shadow cardsize">
              <div className="scored special">
                <img
                  className="special-img"
                  src={require("../images/average.png")}
                  alt=""
                />
                <h6 className="special-head">Avegrage Score</h6>
              </div>
              <h4 className="speacial-head2">25</h4>
            </div>
            <div className="pass shadow cardsize">
              <div className="passed special">
                <img
                  className="special-img"
                  src={require("../images/pass.png")}
                  alt=""
                />
                <h6 className="special-head">Passed Tests</h6>
              </div>
              <h4 className="speacial-head2">25</h4>
            </div>
            <div className="fail shadow cardsize">
              <div className="failed special">
                <img
                  className="special-img"
                  src={require("../images/failed.png")}
                  alt=""
                />
                <h6 className="special-head">Failed Tests</h6>
              </div>
              <h4 className="speacial-head2">25</h4>
            </div>
          </div>
        </section>
        <section className="sidebar">
          <h3 className="exam-head">Notice Board</h3>
          <div className="notice-cont"></div>
        </section>
      </div>

      {/* EXAM HISTORY */}
      <h3 className="exam-history-head">Exam History</h3>
      <section className="exam-history">
        <div className="history-heads">
          <h3>Subject Name</h3>
          <h3>Rank</h3>
          <h3>Score(in %)</h3>
          <h3>Grade</h3>
          <h3>Time Spent</h3>
          <h3>Submitted/Timeout</h3>
          <h3>Details</h3>
        </div>
        <div className="summary">
          <h5 className="subject">Physics</h5>
          <h5 className="result">43</h5>
          <h5 className="percentage">46 %</h5>
          <h5 className="grade">Average</h5>
          <h5 className="time">20 Min</h5>
          <h5 className="date">26/03/22 11:00 AM</h5>
          <a href="/" className="paper-details">
            See Details
          </a>
        </div>
        <div className="summary">
          <h5 className="subject">Physics</h5>
          <h5 className="result">56</h5>
          <h5 className="percentage">46 %</h5>
          <h5 className="grade">Average</h5>
          <h5 className="time">20 Min</h5>
          <h5 className="date">26/03/22 11:00 AM</h5>
          <a href="/" className="paper-details">
            See Details
          </a>
        </div>
        <div className="summary">
          <h5 className="subject">Physics</h5>
          <h5 className="result">32</h5>
          <h5 className="percentage">46 %</h5>
          <h5 className="grade">Average</h5>
          <h5 className="time">20 Min</h5>
          <h5 className="date">26/03/22 11:00 AM</h5>
          <a href="/" className="paper-details">
            See Details
          </a>
        </div>
      </section>
    </div>
  );
}

export default StudentDash;
