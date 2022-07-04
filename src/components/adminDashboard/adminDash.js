import { Redirect, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./adminDash.css";
import Modal from 'react-modal';

import AddQuizModal from "./addQuizModal";
import EditQuizModal from "./editQuizModal";
import AddQuestionModal from "./addQuestionModal";
import ViewQuestionModal from "./viewQuestionModal";
// import { Link } from 'react-router-dom'

function AdminDash(props) {
  const {
    startExam,
    login,
    view_all_questions,
    set_all_quiz,
    allQuiz,
    get_dashboard_data,
    dashboard,
    setCurrQuiz,
    currQuiz,
    edit_quiz,
    start_exam,
    add_quiz,
    view_quiz_by_id,
    delete_quiz,
    add_question,
    edit_question,
    set_curr_question,
    view_question_by_id,
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
      top: '60%',
      left: '50%',
      right: 'auto',
      width:"800px",
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
                <th scope="col">QUIZ OPERATION</th>
                <th scope="col">QUESTION OPERATION</th>
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
                        className="btn btn-warning m-1"
                      
                        onClick={(e) => {
                        //   view_all_questions(quiz._id);
                        setModalOpen(true)
                        setModaltype("edit")
                        setCurrentId(quiz._id)
                        setCurrQuiz(quiz._id)
                       console.log(currentId)
                       view_quiz_by_id(currQuiz.current_quiz)
                        }}
                      >
                    
                        Edit Quiz
                      </button>
                      <button
                        className="btn btn-danger m-1"
                      
                        onClick={() => {
                        //   view_all_questions(quiz._id);
                        delete_quiz(quiz._id)
                        }}
                      >
                    
                        DELETE
                      </button>
                    </td>
            <td>
            <button
                        className="btn btn-warning m-1"
                      
                        onClick={(e) => {
                        //   view_all_questions(quiz._id);
                        setModalOpen(true)
                        setModaltype("add_question")
                        setCurrentId(quiz._id)
                        setCurrQuiz(quiz._id)
                       console.log(currentId)
                       view_quiz_by_id(currQuiz.current_quiz)
                        }}
                      >
                    
                        Add Question
                      </button>
                      <button
                        className="btn btn-warning m-1"
                      
                        onClick={(e) => {
                        //   view_all_questions(quiz._id);
                        setModalOpen(true)
                        setModaltype("view_question")
                        setCurrentId(quiz._id)
                        setCurrQuiz(quiz._id)
                       console.log(currentId)
                       view_all_questions( quiz._id);
                        }}
                      >
                    
                        view & edit
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
        onAfterOpen={()=>{  view_quiz_by_id(currQuiz.current_quiz)}}
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

      <Modal
        isOpen={modalType==="add_question" ? true : false}
        // onAfterOpen={()=>}
        // onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>

<button class="btn btn-danger" onClick={()=>{
    setModalOpen(false)
    setModaltype("")
}}>Close</button>
   <AddQuestionModal data={props} />
   </div>
      </Modal>


      <Modal
        isOpen={modalType==="view_question" ? true : false}
        // onAfterOpen={()=>}
        // onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>

<button class="btn btn-danger" onClick={()=>{
    setModalOpen(false)
    setModaltype("")
}}>Close</button>
   <ViewQuestionModal data={props} />
   </div>
      </Modal>

      </div>
    </section>
  );}


export default AdminDash;
