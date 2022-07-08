import React ,{useState}from 'react'
import Loader_cont from "../../containers/loader/loader_cont";
export default function AddQuizModal(props) {
 
 
 const {add_quiz, loader} = props.data;
 
const [name, setquiz_name] = useState("")
const [date, setquiz_date] = useState("") 
const [time, setquiz_time] = useState("")
const [subject, setquiz_subject] = useState("")
const [marks, setquiz_marks] = useState("")
const [duration, setquiz_duration] = useState("")
let  newQuiz ={name,date,time,subject,marks,duration}

console.log(newQuiz)
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
          <button className='btn btn-success my-2' type="button" 
          onClick={()=>{
            add_quiz(newQuiz)
         setquiz_date("");
         setquiz_duration("");
         setquiz_marks("");
         setquiz_name("");
         setquiz_subject("");
         setquiz_time("");
          }
        
        }>Submit</button>
        </form>
</div>
    
 
  )
}
