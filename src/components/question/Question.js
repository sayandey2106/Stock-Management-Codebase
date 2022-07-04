import React, { useEffect, useState } from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Clock from "./Clock";
import QuestionNumbers from "./questionNumbers";
import './Question.css'
import { start_exam } from "../../actions/startExam/startExamAction";

export default function Question(props) {

  const { startExam, view_all_questions, currQuiz , start_exam, end_exam , attempt_question} = props;



const totalQuestions = startExam.question_set.length;
console.log("total questions ",totalQuestions);



useEffect(() => {
  
  console.log(currQuiz.current_quiz)
view_all_questions( localStorage.getItem('curr_quiz'));
start_exam(localStorage.getItem('curr_quiz'));

}, [])


  // const handleNext =() =>{
  //   console.log("next");
  //   setCurrQuestion(currQuestion+1)
  //   console.log(currQuestion);
  // }
  // const handlePrev =() =>{
  //   console.log("prev");
  //   setCurrQuestion(currQuestion-1)
  //   console.log(currQuestion);
  // }

  const [currQuestion, setCurrQuestion] = useState(0);
  const [selected, setSelected] = useState("");
  const[question,setQuestion]= useState("");
  const[option,setOption]=useState("")


  return (

    <div className="question-page">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-8 col-sm-12">
            <div className="">
              <Clock />
            </div>

            {
              startExam.question_set.filter((item, index) => index === currQuestion).map((questions) => {

                return (
                  <>
                    <div className="m-3">
                      <h2>QUESTIONS:</h2>
                    </div>
                    <div className="m-3 q-label">
                      <span className="q-label">Q{currQuestion + 1}</span>
                    </div>
                    <div className="m-3">
                      <h4>{questions.question}</h4>
                    </div>

                    <div class={selected === questions.A? 'card option-card selected' :
                      'card option-card'}
                      onClick={() => {
                        setSelected(questions.A)
                        setOption("A")
                setQuestion(questions._id)
                      }}>
                      <div class="card-body d-flex">
                        <div className="option-number">
                          <h5>
                            A
                          </h5>
                          
                        </div>
                        <h5 className="option-text">
                          {questions.A}
                        </h5>
                      </div>
                    </div>
                    <div class={selected === questions.B ? 'card option-card selected' :
                      'card option-card'} onClick={() => {
                        setSelected(questions.B)
                        setOption("B")
                setQuestion(questions._id)
                      }}>
                      <div class="card-body d-flex">

                        <h5 className="option-number">
                          B
                        </h5>
                        <h5 className="option-text">
                          {questions.B}
                        </h5>
                      </div>
                    </div>
                    <div class={selected === questions.C ? 'card option-card selected' :
                      'card option-card'} onClick={() => {
                        setSelected(questions.C)
                        setOption("C")
                setQuestion(questions._id)
                      }}>
                      <div class="card-body d-flex">


                        <h5 className="option-number">
                          C
                        </h5>
                        <h5 className="option-text">
                          {questions.C}
                        </h5>
                      </div>
                    </div>
                    <div class={selected === questions.D ? 'card option-card selected' :
                      'card option-card'} onClick={() => {
                        setSelected(questions.D)
                        setOption("D")
                setQuestion(questions._id)
                      }}>
                      <div class="card-body d-flex">


                        <h5 className="option-number">
                          D
                        </h5>
                        <h5 className="option-text">
                          {questions.D}
                        </h5>
                      </div>
                    </div>
                  </>

);

              })
            }



            <div className="justify-content-center text-center mb-5">

              <div className="m-1 p-1">


                {
                  currQuestion > 0 ?
                    <button className="btn green-btn float-start"
                      onClick={() => {
                        setCurrQuestion(currQuestion - 1);
                        console.log("prev", currQuestion);
                      
                      }}
                    >
                      <i class="fa-solid fa-angle-left mx-1"></i>

                      previous
                    </button> : <></>
                }


{
  currQuestion < totalQuestions-1 ?
                <button className="btn green-btn float-end"
                  onClick={() => {
                    setCurrQuestion(currQuestion + 1);
                    console.log("next", currQuestion)
                  
                    attempt_question(localStorage.getItem('curr_quiz'),question,option)
                    
                  }}

                >Save &
                  Next
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
              <button className="btn green-btn float-end" id="submit-btn"
              onClick={()=>{
                end_exam(localStorage.getItem("curr_quiz"))
                // localStorage.removeItem("curr_quiz");
              }}
              >
                Submit
              </button>
            </div>

          </div>

          <div className="col-md-4 col-lg- col-sm-12">
            <div className=" float-end">
              {/* <QuestionNumbers data={props}/> */}
              <div>
                <div className="m-4">
                  <div className="exam-info my-3">
                    <span>30 minutes</span>
                  </div>
                  <div className="exam-info my-3">
                    <span>50 Marks (Pass marks: 40)</span>
                  </div>

                  <div className="row" style={{ width: 250, height: 250 }}>
                    {/* {startExam.question_set.map((number,i) => {
            return (
              <div className="col-md-3 col-lg-3 col-sm-3 col-3 btn-line">
                <div className="btn btn-secondary q-no">{i+1}</div>
              </div>
            );
          })} */}


                    {
                      startExam.question_set.map((filteredItem, i) => {
                        return (
                          <div className="col-md-3 col-lg-3 col-sm-3 col-3 btn-line">
                            <div className="btn btn-secondary q-no"
                              onClick={() => {
                                setCurrQuestion(i)
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
    </div>

  );
}
