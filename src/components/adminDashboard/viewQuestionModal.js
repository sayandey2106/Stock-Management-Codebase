import React, {useState, useEffect} from 'react'
import Modal from 'react-modal';
import EditQuestionModal from './editQuestionModal';

export default function ViewQuestionModal(props) {
    
    const{edit_quiz ,currQuiz, view_quiz_by_id, view_all_questions, startExam , view_question_by_id, set_curr_question , edit_question}=props.data
//     const {currentId}= props.currId

//     const [name, setquiz_name] = useState(currQuiz.current_quiz_details.name)
// const [date, setquiz_date] = useState(currQuiz.current_quiz_details.date) 
// const [time, setquiz_time] = useState(currQuiz.current_quiz_details.time)
// const [subject, setquiz_subject] = useState(currQuiz.current_quiz_details.subject)
// const [marks, setquiz_marks] = useState(currQuiz.current_quiz_details.marks)
// const [duration, setquiz_duration] = useState(currQuiz.current_quiz_details.duration)
// const [id, setquiz_id] = useState(currQuiz.current_quiz)
// let  newQuiz ={name,date,time,subject,marks,duration}

const [currQuestion, setCurrQuestion] = useState(3);
  const [selected, setSelected] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

useEffect(() => {
  
    view_all_questions( currQuiz.current_quiz);
  
}, [])
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
    <div class="modal-body overflow-auto">
                    <div className="m-3">
                      <h2>QUESTIONS:</h2>
                    </div>
      {
              startExam.question_set.filter((item, index) => index <= currQuestion).map((questions) => {

                return (
                  <>
                    <div className="m-3 q-label">
                      <span className="q-label">Q{currQuestion + 1}</span>
                    </div>
                      <button className=' btn btn-warning ' 
                      onClick={()=>{
                        setModalOpen(true)
                        set_curr_question(questions._id);
                        view_question_by_id(currQuiz.current_quiz,questions._id)
                      }}
                      >Edit Question {questions._id}</button>

                    <div className="m-3">
                      <h4>{questions.question}</h4>
                    </div>

                    <div class={questions.correct ==="A"? 'card option-card selected' :
                      'card option-card'}
                    //   onClick={() => {
                    //     setSelected(questions.A)
                    //   }}
                      >
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
                    <div class={questions.correct ==="B" ? 'card option-card selected' :
                      'card option-card'} 
                    //   onClick={() => {
                    //     setSelected(questions.B)
                    //   }}
                      >
                      <div class="card-body d-flex">

                        <h5 className="option-number">
                          B
                        </h5>
                        <h5 className="option-text">
                          {questions.B}
                        </h5>
                      </div>
                    </div>
                    <div class={questions.correct ==="C" ? 'card option-card selected' :
                      'card option-card'}
                    //    onClick={() => {
                    //     setSelected(questions.C)
                    //   }}
                      >
                      <div class="card-body d-flex">


                        <h5 className="option-number">
                          C
                        </h5>
                        <h5 className="option-text">
                          {questions.C}
                        </h5>
                      </div>
                    </div>
                    <div class={questions.correct ==="D" ? 'card option-card selected' :
                      'card option-card'} 
                    //   onClick={() => {
                    //     setSelected(questions.D)
                    //   }}
                      >
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


<Modal
        isOpen={modalOpen}
        // onAfterOpen={()=>}
        // onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>

<button class="btn btn-danger" onClick={()=>{
    setModalOpen(false)
 
}}>Close</button>
   <EditQuestionModal data={props.data} />
   </div>
      </Modal>
</div>

  )
}
