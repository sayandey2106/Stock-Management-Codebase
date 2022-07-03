import { Redirect, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./adminDash.css";
import Modal from 'react-modal';

import AddQuizModal from "./addQuizModal";
import EditQuizModal from "./editQuizModal";
// import { Link } from 'react-router-dom'

function AdminDash(props) {
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
    edit_quiz,
    start_attempt,
    add_quiz,
    view_quiz_by_id
    // dashboardHistory
    // dashboardSummary,
    // dashboardHistory,
  } = props;

  useEffect(() => {
    set_all_quiz();
    get_dashboard_data();
    localStorage.removeItem("curr_quiz");
    
  
  }, []);

const [modalOpen, setModalOpen] = useState(false);
const[modalType,setModaltype]= useState("");
const [currentId, setCurrentId]= useState("")

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      width:"600px",
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };



  return (
    <section className="grey-bg">
      <div className="container">
        {/* Button LOGOUT */}

        {/* DETAILED CARDS */}

        {/* Upcoming exam */}
        <section className="" style={{ marginTop: "70px" }}>
          <h3 className="exam-history-head text-center my-3">Upcoming Exam</h3>

          <button className="btn btn-warning  text-center my-3" onClick={(e)=>{
            setModalOpen(true)
            setModaltype("add")
          }}> Add quiz</button>
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
                      <h5>{quiz._id}</h5>
                    </td>
                    <td>
                      <button
                        className="btn btn-success"
                        type="button"
                        onClick={() => {
                        //   start_exam(quiz._id);
                          console.log(quiz._id)
                          // setRedirect(true)
                        //   history.push("/quiz")
                        //   setId (quiz._id);
                        //   setCurrQuiz(quiz._id);
                        //   localStorage.setItem('curr_quiz', quiz._id);
                       
                        }}
                      >
                    
                       ADD QUESTIONS
                      </button>
                      <button
                        className="btn btn-warning"
                      
                        onClick={(e) => {
                        //   start_exam(quiz._id);
                        setModalOpen(true)
                        setModaltype("edit")
                        setCurrentId(quiz._id)
                        setCurrQuiz(quiz._id)
                       console.log(currentId)
                        }}
                      >
                    
                        Edit Quiz
                      </button>
                    </td>
            
                  </tr>
                );
              })}
            
            </tbody>
          </table>
        </section>


        <Modal
        isOpen={modalType==="add" ? true: false}
        // onAfterOpen={}
        // onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>

<button class="btn btn-danger" onClick={()=>{
    setModalOpen(false)
    setModaltype("")
}}>Close</button>
<AddQuizModal data={props}/>
   </div>
      </Modal>


      <Modal
        isOpen={modalType==="edit"?true :false}
        // onAfterOpen={}
        // onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>

<button class="btn btn-danger" onClick={()=>{
    setModalOpen(false)
    setModaltype("")
}}>Close</button>
   <EditQuizModal data={props} currId={currentId}/>
   </div>
      </Modal>

       

      </div>
    </section>
  );}


export default AdminDash;
