import React , {useEffect,useState} from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import './Clock.css'




export default function Clock(props) {


    const {currQuiz, end_exam}= props.data
   const [minutes, setminutes] = useState(currQuiz.current_quiz_details.duration);
   const [seconds, setseconds] = useState(0);

  

var timer;

useEffect(() => {

timer = setInterval(() => {
    
    setseconds(seconds-1)
 
    if (seconds===0){
        setminutes(minutes-1);
        setseconds(59);
        // setseconds(seconds-1);

    }
    if(minutes===0) {
      end_exam(localStorage.getItem("curr_quiz"))
      localStorage.removeItem("curr_quiz")
    }

}, 1000);
  

return () => clearInterval(timer);
})


const percentage = (((1500-((minutes*60)+seconds))/1500)*100);
  return (
    <div>

<div className='d-flex'>

<div style={{ width: 150, height: 150 , pathColor: '#68EB4E' }} className="m-3">

<CircularProgressbar value={percentage} text={
    
    (seconds<10)?`${minutes} : 0${seconds}`:`${minutes} : ${seconds}`} />
</div>
<div className='mt-5 mx-3'>
    <h3>Exam: unit 5 final exam</h3>
    <p>Subject: Physics </p>
    <p>20 Question: Multiple choice Questions</p>
</div>
    </div>
    </div>
  )
}
