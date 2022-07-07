import React, { useEffect, useState } from "react";

import "react-circular-progressbar/dist/styles.css";
import Clock from "./Clock";
import QuestionNumbers from "./questionNumbers";
import './Question.css'
import { start_exam } from "../../actions/startExam/startExamAction";
import { useHistory } from "react-router-dom";
import Modal from 'react-modal'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import './Clock.css'
import { set } from "date-fns";

export default function Question(props) {

  const { startExam, view_all_questions, currQuiz , start_exam, end_exam , attempt_question, setCurrQuestionStudent, view_quiz_by_id} = props;



const totalQuestions = startExam.question_set.length;

const totalTime = parseInt(currQuiz.current_quiz_details.duration);
console.log("total time ", totalTime);
const history = useHistory()


const [minutes, setminutes] = useState(0);
const [seconds, setseconds] = useState(0);

useEffect(() => {
  // window.location.reload(false)
  setminutes(totalTime)
  view_quiz_by_id( localStorage.getItem('curr_quiz'));
  console.log(currQuiz.current_quiz)
  view_all_questions( localStorage.getItem('curr_quiz'));
  // start_exam(localStorage.getItem('curr_quiz'));
  console.log(startExam.question_set[0])
  console.log(currQuiz.current_quiz_details.duration-1)
  setCurrQuestionStudent( startExam.question_set[index]);
}, [])
const customStyles = {
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    width:"600px",
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const [modalOpen,setModalOpen]= useState(false)

// clock effect




var timer;
useEffect(() => {
  
  timer = setInterval(() => {
    
    setseconds(seconds-1)
    
    if (seconds===0){
      setminutes((minutes)-1);
      setseconds(59);
      // setseconds(seconds-1);
      
    }
      if(minutes===0) {
        end_exam(localStorage.getItem("curr_quiz"))
        localStorage.removeItem("curr_quiz")
      }
      
    }, 1000);
    
    return () => clearInterval(timer);
    console.log("total time ",minutes);
  })
const percentage = ((((currQuiz.current_quiz_details.duration*60)-((minutes*60)+seconds))/(currQuiz.current_quiz_details.duration*60))*100);


    const [index, setIndex] = useState(0)
  const [currQuestion, setCurrQuestion] = useState(0);
  const [selected, setSelected] = useState("");
  const[question,setQuestion]= useState("");
  const[option,setOption]=useState("")



// console.log(arrOpt)
  return (

    <div className="question-page">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-8 col-sm-12">
            <div className="">

              {/* clock */}
            <div>

<div className='d-flex'>

<div style={{ width: 150, height: 150 , pathColor: '#68EB4E' }} className="m-3">

<CircularProgressbar value={percentage} text={
    
    // (seconds<10)?`${minutes} : 0${seconds}`:`${minutes} : ${seconds}`} 
   minutes + ":" + seconds
  }
    
    />
</div>
<div className='mt-5 mx-3'>
   
    <p>Subject: {currQuiz.current_quiz_details.subject} </p>
    
</div>
    </div>
    </div>
            </div>

  <div className="m-3">
                      <h2>QUESTIONS:</h2>
                    </div>
                    <div className="m-3 q-label">
                      <span className="q-label">Q{index + 1}</span>
                    </div>
                    <div className="m-3">
                      {/* <h4>{currQuiz.current_question_details_student.question}</h4> */}
                      <h4>{startExam.question_set[index].question}</h4>
                    </div>

                    <div class={((selected ===startExam.question_set[index].A) ||(currQuiz.attempt_question_response[index]==="A") )? 'card option-card selected' :
                      'card option-card'}
                      onClick={() => {
                        setSelected(startExam.question_set[index].A)
                        setOption("A")
                        // arrOpt[index]=startExam.question_set[index].A
                        currQuiz.attempt_question_response[index] = "A"

                // setQuestion(questions._id)
                      }}>
                      <div class="card-body d-flex">
                        <div className="option-number">
                          <h5>
                            A
                          </h5>
                          
                        </div>
                        <h5 className="option-text">
                        {startExam.question_set[index].A}
                        </h5>
                      </div>
                    </div>
                    <div class={((selected ===startExam.question_set[index].B) ||(currQuiz.attempt_question_response[index]==="B") )? 'card option-card selected' :
                      'card option-card'} onClick={() => {
                        setSelected(startExam.question_set[index].B)
                        setOption("B")
                        // arrOpt[index]=startExam.question_set[index].B
                        currQuiz.attempt_question_response[index] = "B"
                        

                // setQuestion(questions._id)
                      }}>
                      <div class="card-body d-flex">

                        <h5 className="option-number">
                          B
                        </h5>
                        <h5 className="option-text">
                          {startExam.question_set[index].B}
                        </h5>
                      </div>
                    </div>
                    <div class={((selected ===startExam.question_set[index].C) ||(currQuiz.attempt_question_response[index]==="C") )? 'card option-card selected' :
                      'card option-card'} onClick={() => {
                        setSelected(startExam.question_set[index].C)
                        setOption("C")
                        // arrOpt[index]=startExam.question_set[index].C
                        currQuiz.attempt_question_response[index] = "C"
                        

                // setQuestion(questions._id)
                      }}>
                      <div class="card-body d-flex">


                        <h5 className="option-number">
                          C
                        </h5>
                        <h5 className="option-text">
                          {startExam.question_set[index].C}
                        </h5>
                      </div>
                    </div>
                    <div class={((selected ===startExam.question_set[index].D) ||(currQuiz.attempt_question_response[index]==="D") ) ? 'card option-card selected' :
                      'card option-card'} onClick={() => {
                        setSelected(startExam.question_set[index].D)
                        setOption("D")
                        // arrOpt[index]=startExam.question_set[index].D
                        currQuiz.attempt_question_response[index] = "D"
                        

                // setQuestion(questions._id)
                      }}>
                      <div class="card-body d-flex">


                        <h5 className="option-number">
                          D
                        </h5>
                        <h5 className="option-text">
                          {startExam.question_set[index].D}
                        </h5>
                      </div>
                    </div>


            <div className="justify-content-center text-center mb-5">

              <div className="m-1 p-1">


                {
                  index > 0 ?
                    <button className="btn green-btn float-start"
                      onClick={() => {
                        // setCurrQuestion(currQuestion - 1);
                        setIndex(index-1)
                        console.log("prev", currQuestion);
                        setCurrQuestionStudent( startExam.question_set[index-1]);
                      }}
                    >
                      <i class="fa-solid fa-angle-left mx-1"></i>

                      previous
                    </button> : <></>
                }


{
  index < totalQuestions-1 ?
                <button className="btn green-btn float-end"
                  onClick={() => {
                    // setCurrQuestion(currQuestion + 1);
                    setIndex(index+1)
                    setCurrQuestionStudent( startExam.question_set[index+1]);
                    console.log("next", currQuestion)
                  
                    attempt_question(startExam.question_set[index].quiz_id,startExam.question_set[index]._id,option)
                    
                  }}>
                    Save and Next
                  <i class="fa-solid fa-angle-right mx-1"></i>
                </button>:<></>
}
{
  index === totalQuestions-1 ?
                <button className="btn green-btn float-end"
                  onClick={() => {
                    // setCurrQuestion(currQuestion + 1);
                    // setIndex(index+1)
                    // setCurrQuestionStudent( startExam.question_set[index+1]);
                    console.log("next", currQuestion)
                  
                    attempt_question(startExam.question_set[index].quiz_id,startExam.question_set[index]._id,option)
                    
                  }}

                >Save 
                  <i class="fa-solid fa-angle-right mx-1"></i>
                </button>:<></>
}


              </div>

            </div>

            <div className=" blue-bar ">

              <button className="btn btn-danger float-start" onClick={()=>{
                  setCurrQuestion(currQuestion + 1);
                  console.log("skip", currQuestion)
                  setSelected("")
              }}>
                skip
                <i class="fa-solid fa-angles-right mx-1"></i>
              </button>
              <button className = "btn green-btn float-end"  id="submit-btn"
              onClick={()=>{
                end_exam(localStorage.getItem("curr_quiz"))
                localStorage.removeItem("curr_quiz");
                // history.push('/')
                setModalOpen(true)
              }}
              >  Submit
              </button>
            </div>

          </div>

          <div className="col-md-4 col-lg-4 col-sm-12">
            <div className=" float-end">
              {/* <QuestionNumbers data={props}/> */}
              <div>
                <div className="m-4">
                  <div className="exam-info my-3">
                    <span>Duration : {currQuiz.current_quiz_details.duration}</span>
                  </div>
                  <div className="exam-info my-3">
                    <span>Total Marks : {currQuiz.current_quiz_details.marks}</span>
                  </div>

                  <div className="row" style={{ width: "250px", height: "100%" }}>
                    
                    {
                      startExam.question_set.map((filteredItem, i) => {
                        return (
                          <div className="col-md-3 col-lg-3 col-sm-3 col-3 btn-line">
                            <div className="btn btn-secondary q-no"
                              onClick={() => {
                                setCurrQuestionStudent( startExam.question_set[i]);
                              }}
                            >{i + 1}</div>
                          </div>
                        );

                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Modal
        isOpen={modalOpen}
        // onAfterOpen={}
        // onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>

<button class="btn btn-danger" onClick={()=>{
    setModalOpen(false)

}}>Close</button>
<h3>Are you sure to end exam</h3>
<button className="btn btn-danger" onClick={()=>{
  
  end_exam(localStorage.getItem("curr_quiz"))
  setTimeout(localStorage.removeItem('curr_quiz'), 2000)


  setTimeout(history.push('/'), 3000)

}}

> Start exam</button>
   </div>
      </Modal>
    </div>

  );
}
