import React, {useState, useEffect} from 'react'
import Loader_cont from "../../containers/loader/loader_cont";
export default function EditQuizModal(props) {
    
  
  useEffect(() => {
    
      view_quiz_by_id(currQuiz.current_quiz)
    setquiz_date(currQuiz.current_quiz_details.date);
    setquiz_duration(currQuiz.current_quiz_details.duration);
    setquiz_marks(currQuiz.current_quiz_details.marks);
    setquiz_name(currQuiz.current_quiz_details.name);
    setquiz_subject(currQuiz.current_quiz_details.subject);
    setquiz_time(currQuiz.current_quiz_details.time);
  }, [])
    const{edit_quiz ,currQuiz, view_quiz_by_id, loader}=props.data
    const {currentId}= props.currId

    const [name, setquiz_name] = useState()
const [date, setquiz_date] = useState() 
const [time, setquiz_time] = useState()
const [subject, setquiz_subject] = useState()
const [marks, setquiz_marks] = useState()
const [duration, setquiz_duration] = useState()
const [id, setquiz_id] = useState(currQuiz.current_quiz)
let  newQuiz ={name,date,time,subject,marks,duration}

  return (
    <div class="modal-body">
      {
      loader.openLoader===true? <Loader_cont/>:<></>}
    <form>
      <div class="form-group">
        <label for="recipient-name" class="col-form-label">Name</label>
        <input type="text" class="form-control"  value={name} 
            onChange={(e)=>setquiz_name(e.target.value)}/>
      </div>
      <div class="form-group">
        <label for="recipient-name" class="col-form-label">Date</label>
        <input type="text" class="form-control"  value={date}
              onChange={(e)=>setquiz_date(e.target.value)}/>
      </div>
      <div class="form-group">
        <label for="recipient-name" class="col-form-label">Time</label>
        <input type="text" class="form-control" value={time} 
             onChange={(e)=>setquiz_time(e.target.value)}/>
      </div>
      <div class="form-group">
        <label for="recipient-name" class="col-form-label">Subject</label>
        <input type="text" class="form-control"  value={subject} 
              onChange={(e)=>setquiz_subject(e.target.value)}/>
      </div>
      <div class="form-group">
        <label for="recipient-name" class="col-form-label">Full Marks</label>
        <input type="number" class="form-control"  value={marks} 
              onChange={(e)=>setquiz_marks(e.target.value)}/>
      </div>
      <div class="form-group">
        <label for="recipient-name" class="col-form-label">Duration</label>
        <input type="number" class="form-control"  value={duration} 
              onChange={(e)=>setquiz_duration(e.target.value)}/>
      </div>
      <button className='btn btn-success my-2' type="button" onClick={()=>{edit_quiz(id,newQuiz)}}>Submit</button>
    </form>
</div>

  )
}
