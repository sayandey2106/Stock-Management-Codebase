import React, { useState, useEffect } from "react";

import EditQuestionModal from "./editQuestionModal";
import Loader_cont from "../../containers/loader/loader_cont";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { IconButton } from "@mui/material";

export default function ViewQuestionModal(props) {
  const {
    edit_quiz,
    currQuiz,
    view_quiz_by_id,
    view_all_questions,
    startExam,
    view_question_by_id,
    set_curr_question,
    edit_question,
    loader,
  } = props.data;

  const [currQuestion, setCurrQuestion] = useState(3);
  const [selected, setSelected] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    view_all_questions(currQuiz.current_quiz);
  }, []);
  const customStyles = {
    content: {
      top: "60%",
      left: "50%",
      right: "auto",
      width: "800px",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 550,
    bgcolor: "background.paper",
   
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    overflowY:"scroll"
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div class="modal-body ">
      {/* {
      loader.openLoader===true? <Loader_cont/>:<></>} */}
      <div className="m-3">
        <h2>QUESTIONS:</h2>
      </div>
      {startExam.question_set
        .filter((item, index) => index <= currQuestion)
        .map((questions, i) => {
          return (
            <>
              <div className="m-3 q-label">
                Q{i + 1}
              </div>
              <button
                className=" btn btn-warning "
                onClick={() => {
                  handleOpen()
                  set_curr_question(questions._id);
                  view_question_by_id(currQuiz.current_quiz, questions._id);
                }}
              >
                Edit Question
              </button>

              <div className="m-3">
                <h4>{questions.question}</h4>
              </div>

              <div
                class={
                  questions.correct === "A"
                    ? "card option-card selected"
                    : "card option-card"
                }
                //   onClick={() => {
                //     setSelected(questions.A)
                //   }}
              >
                <div class="card-body d-flex">
                  <div className="option-number">
                    <h5>A</h5>
                  </div>
                  <h5 className="option-text">{questions.A}</h5>
                </div>
              </div>
              <div
                class={
                  questions.correct === "B"
                    ? "card option-card selected"
                    : "card option-card"
                }
                //   onClick={() => {
                //     setSelected(questions.B)
                //   }}
              >
                <div class="card-body d-flex">
                  <h5 className="option-number">B</h5>
                  <h5 className="option-text">{questions.B}</h5>
                </div>
              </div>
              <div
                class={
                  questions.correct === "C"
                    ? "card option-card selected"
                    : "card option-card"
                }
                //    onClick={() => {
                //     setSelected(questions.C)
                //   }}
              >
                <div class="card-body d-flex">
                  <h5 className="option-number">C</h5>
                  <h5 className="option-text">{questions.C}</h5>
                </div>
              </div>
              <div
                class={
                  questions.correct === "D"
                    ? "card option-card selected"
                    : "card option-card"
                }
                //   onClick={() => {
                //     setSelected(questions.D)
                //   }}
              >
                <div class="card-body d-flex">
                  <h5 className="option-number">D</h5>
                  <h5 className="option-text">{questions.D}</h5>
                </div>
              </div>
            </>
          );
        })}

      <Modal 
      hideBackdrop
      open={open}
      onClose={handleClose}>
     
        <Box sx={style}>
        <IconButton className="close-button-edit-question" color="error" >
        <CloseRoundedIcon onClick={handleClose} />
        </IconButton>
          <EditQuestionModal data={props.data} />
        </Box>
      </Modal>
    </div>
  );
}
