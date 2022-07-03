import { Redirect, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./style.css";
// import { Link } from 'react-router-dom'

function StudentDash(props) {
  const {
    startExam,
    login,
    start_exam,
    set_all_quiz,
    allQuiz,
    get_dashboard_data,
    dashboard,
    setCurrQuiz,
    currQuiz,
    start_attempt
    // dashboardHistory
    // dashboardSummary,
    // dashboardHistory,
  } = props;

  useEffect(() => {
    set_all_quiz();
    get_dashboard_data();
  }, []);

const [redirect, setRedirect] = useState(false);

const [id, setId] = useState();
const history =useHistory()

if(redirect===true && startExam.question_set !=""){
  return(

    <Redirect to={{

      pathname: '/quiz',
    
    }} />
    // props.history.push("/quiz" , startExam)
  );
}

  const handleClick = (quiz) => {
    console.log(quiz)
  };


  return (
    <section className="grey-bg">
      <div className="container">
        {/* Button LOGOUT */}

        {/* DETAILED CARDS */}
        <div className="card1 row">
          <section className="col-lg-8 col-md-7 " style={{ marginTop: "60px" }}>
            <h3 className="exam-head text-center my-3">Exam Summary</h3>
            <div class="row ">
              <div class="col-xl-> col-sm-6 col-md-4 col-12 mt-2">
                <div class="card card-1">
                  <div class="card-content">
                    <div class="card-body text-center">
                      <div class="media">
                        <div class="align-self-center">
                          <i class="icon-pencil primary font-large-2 float-left"></i>
                        </div>
                        <div class="media-body text-right">
                          <h3>{dashboard.summary.Attended_test}</h3>
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
                    <div class="card-body text-center">
                      <div class="media">
                        <div class="align-self-center">
                          <i class="icon-pencil primary font-large-2 float-left"></i>
                        </div>
                        <div class="media-body text-right">
                          <h3>{dashboard.summary.Pending_test}</h3>
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
                    <div class="card-body text-center">
                      <div class="media">
                        <div class="align-self-center">
                          <i class="icon-pencil primary font-large-2 float-left"></i>
                        </div>
                        <div class="media-body text-right">
                          <h3>{dashboard.summary.Absent}</h3>
                          <span>Absent</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-> col-sm-6 col-md-4 col-12 mt-2">
                <div class="card card-1 text-center">
                  <div class="card-content text-center">
                    <div class="card-body text-center">
                      <div class="media">
                        <div class="align-self-center">
                          <i class="icon-pencil primary font-large-2 float-left"></i>
                        </div>
                        <div class="media-body text-right">
                          <h3>{dashboard.summary.average_score}</h3>
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
                    <div class="card-body text-center">
                      <div class="media">
                        <div class="align-self-center">
                          <i class="icon-pencil primary font-large-2 float-left"></i>
                        </div>
                        <div class="media-body text-right">
                          <h3>{dashboard.summary.passed_test}</h3>
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
                    <div class="card-body text-center">
                      <div class="media">
                        <div class="align-self-center">
                          <i class="icon-pencil primary font-large-2 float-left"></i>
                        </div>
                        <div class="media-body text-right">
                          <h3>{dashboard.summary.failed_test}</h3>
                          <span>Failed Tests</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="sidebar col-lg-4 col-md-4 "
            style={{ marginTop: "60px" }}
          >
            <h3 className="exam-head text-center my-3">Notice Board</h3>
            <div className="notice-cont card mt-2 p-4">
              <h4>
                Sit accusam ea dolores voluptua clita magna est duo justo dolor.
                Accusam tempor est magna sed ut et, et est.
              </h4>
            </div>
          </section>
        </div>

        {/* Upcoming exam */}
        <section className="" style={{ marginTop: "70px" }}>
          <h3 className="exam-history-head text-center my-3">Upcoming Exam</h3>
          <table class="table-light table table-striped table-responsive">
            <thead>
              <tr className="text-center">
                <th scope="col">Name</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Subject</th>
                <th scope="col">Full Marks</th>
                <th scope="col">Duration</th>
                <th scope="col">Exam Link</th>
              </tr>
            </thead>
            <tbody>
              {allQuiz.map((quiz) => {

                // const {_id}=quiz;
                // const x = quiz._id
                return (
                  <tr className="text-center">
                    <td>
                      <h5>{quiz.name}</h5>
                    </td>
                    <td>
                      <h5>{quiz.date}</h5>
                    </td>
                    <td>
                      <h5>{quiz.time}</h5>
                    </td>
                    <td>
                      <h5>{quiz.subject}</h5>
                    </td>
                    <td>
                      <h5>{quiz.marks}</h5>
                    </td>
                    <td>
                      <h5>{quiz.duration}</h5>
                    </td>
                    <td>
                      <button
                        className="btn btn-success"
                        type="button"
                        onClick={() => {
                          start_exam(quiz._id);
                          console.log(quiz._id)
                          // setRedirect(true)
                          history.push("/quiz")
                          setId (quiz._id);
                          setCurrQuiz(quiz._id);
                          localStorage.setItem('curr_quiz', quiz._id);
                       
                        }}
                      >
                    
                        Start Exam
                      </button>
                    </td>
                  </tr>
                );
              })}
            
            </tbody>
          </table>
        </section>

        {/* exam history */}
        <section className="" style={{ marginTop: "70px" }}>
          <h3 className="exam-history-head text-center my-3">Exam History</h3>
          <table class="table-light table table-striped table-responsive">
            <thead>
              <tr>
                <th scope="col">Subject</th>

                <th scope="col">Score (Percentage)</th>
                <th scope="col">Grade</th>
                <th scope="col">Date</th>
                <th scope="col">Full Marks</th>
              </tr>
            </thead>
            <tbody>
              {dashboard.history.map((info) => {
                return (
                  <tr>
                    <td scope="col">{info.subject} </td>
                    <td scope="col">{info.score_in_percentage} </td>
                    <td scope="col">{info.grade} </td>
                    <td scope="col">{info.details.quiz_date} </td>
                    <td scope="col">{info.details.quiz_marks} </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>

        {/* 
<section>
  <div className="row">



  {
                dashboard.history.map(info => {

                  return (
  <div class="col-xl-> col-sm-6 col-md-3 col-12 mt-2">
                <div class="card card-1">
                  <div class="card-content">
                    <div class="card-body">
                      <div class="media d-flex">
                       <div className="text-center">
                          <h2>{info.subject}
                            </h2>
                            <h4>
                              Percentage: {info.score_in_percentage}
                              </h4>
                              <h4>
                              Grade: {info.grade}
                              </h4>
                              <h4>
                              Date: {info.details.quiz_date}
                              </h4>
                              <h4>
                              Full Marks: {info.details.quiz_marks}
                              </h4>

                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

                  )
                })
              }

  </div>
</section> */}

      </div>
    </section>
  );}


export default StudentDash;
