import { Redirect, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./adminDash.css";

import AddQuizModal from "./addQuizModal";
import EditQuizModal from "./editQuizModal";
import AddQuestionModal from "./addQuestionModal";
import ViewQuestionModal from "./viewQuestionModal";
import Loader_cont from "../../containers/loader/loader_cont";
import { student_marks } from "../../actions/quizCrud/quizCrudAction";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Box from "@mui/material/Box";
import { Modal } from "@mui/material";

import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
function AdminDash(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    if (modalType === "student_marks") {
      dashboard.student_marks = [];
    }
    setModaltype("");
  };
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
    loader,
    student_marks,
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
  const [modalType, setModaltype] = useState("");
  const [currentId, setCurrentId] = useState("");

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

  const modal_style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    overflowY: "scroll",
  };

  return (
    <section className="grey-bg">
      {loader.openLoader === true ? <Loader_cont /> : <></>}
      <div className="container">
        {/* Button LOGOUT */}

        {/* DETAILED CARDS */}

        {/* Upcoming exam */}
        <section className="" style={{ marginTop: "70px" }}>
          <h3 className="exam-history-head text-center my-3">Upcoming Exam</h3>

          <Button
            variant="contained"
            sx={{ margin: "20px 0px" }}
            onClick={(e) => {
              setModaltype("add");
            }}
          >
            {" "}
            Add quiz
          </Button>
          <div className="table-responsive">
            <table class="table-light table table-striped ">
              <thead>
                <tr className="text-center">
                  <th scope="col">Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Full Marks</th>
                  <th scope="col">Duration (In minutes)</th>
                  <th scope="col">Quiz Operation</th>
                  <th scope="col">Question Operation</th>
                  <th scope="col">Student Details</th>
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
                        <IconButton color="success">
                          <EditIcon
                            onClick={(e) => {
                              //   view_all_questions(quiz._id);
                              setModalOpen(true);
                              setModaltype("edit");
                              setCurrentId(quiz._id);
                              setCurrQuiz(quiz._id);
                              console.log(currentId);
                              view_quiz_by_id(currQuiz.current_quiz);
                            }}
                          />
                        </IconButton>
                        <IconButton color="error">
                          <DeleteIcon
                            onClick={() => {
                              //   view_all_questions(quiz._id);
                              // delete_quiz(quiz._id)
                            }}
                          />
                        </IconButton>
                      </td>
                      <td>
                        <IconButton color="primary">
                          <AddRoundedIcon
                            fontSize="large"
                            onClick={(e) => {
                              //   view_all_questions(quiz._id);
                              setModalOpen(true);
                              setModaltype("add_question");
                              setCurrentId(quiz._id);
                              setCurrQuiz(quiz._id);
                              console.log(currentId);
                              view_quiz_by_id(currQuiz.current_quiz);
                            }}
                          />
                        </IconButton>
                        <IconButton color="warning">
                          <VisibilityRoundedIcon
                            onClick={(e) => {
                              //   view_all_questions(quiz._id);
                              setModalOpen(true);
                              setModaltype("view_question");
                              setCurrentId(quiz._id);
                              setCurrQuiz(quiz._id);
                              console.log(currentId);
                              view_all_questions(quiz._id);
                            }}
                          />
                        </IconButton>
                      </td>
                      <td>
                        <button
                          className="btn btn-warning m-1"
                          onClick={(e) => {
                            //   view_all_questions(quiz._id);
                            //   setModalOpen(true)
                            setModaltype("student_marks");
                            setCurrentId(quiz._id);
                            student_marks(quiz._id);
                            //   setCurrQuiz(quiz._id)
                            //  console.log(currentId)
                            //  view_quiz_by_id(currQuiz.current_quiz)
                          }}
                        >
                          Student's Marks
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <Modal open={modalType === "add" ? true : false} onClose={handleClose}>
          <Box sx={modal_style}>
            <AddQuizModal data={props} />
          </Box>
        </Modal>

        <Modal open={modalType === "edit" ? true : false} onClose={handleClose}>
          <Box sx={modal_style}>
            <EditQuizModal data={props} currId={currentId} />
          </Box>
        </Modal>
        <Modal
          open={modalType === "add_question" ? true : false}
          onClose={handleClose}
        >
          <Box sx={modal_style}>
            <AddQuestionModal data={props} />
          </Box>
        </Modal>
        <Modal
          open={modalType === "view_question" ? true : false}
          onClose={handleClose}
        >
          <Box sx={modal_style}>
            <ViewQuestionModal data={props} />
          </Box>
        </Modal>
        <Modal
          open={modalType === "student_marks" ? true : false}
          onClose={handleClose}
        >
          <Box sx={modal_style}>
            <section>
              <table class="table table-striped table-responsive ">
                <thead>
                  <tr>
                    <th scope="col">Sl No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Grade</th>
                    <th scope="col">Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {dashboard.student_marks.map((student, i) => {
                    return (
                      <tr>
                        <th scope="row">{i + 1}</th>
                        <td>{student.name}</td>
                        <td>{student.grade}</td>
                        <td>{student.percentage}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </section>
          </Box>
        </Modal>
      </div>
    </section>
  );
}

export default AdminDash;

// <Modal
//     isOpen={modalType === "edit" ? true : false}
//     onAfterOpen={() => {
//       view_quiz_by_id(currQuiz.current_quiz);
//     }}
//     // onRequestClose={closeModal}
//     style={customStyles}
//     contentLabel="Example Modal"
//   >
//     <div>
//       <button
//         class="btn btn-danger"
//         onClick={() => {
//           setModalOpen(false);
//           setModaltype("");
//         }}
//       >
//         Close
//       </button>
//       <EditQuizModal data={props} currId={currentId} />
//       </div>
//       </Modal>

//   <Modal
//     isOpen={modalType === "add_question" ? true : false}
//     // onAfterOpen={()=>}
//     // onRequestClose={closeModal}
//     style={customStyles}
//     contentLabel="Example Modal"
//   >
//     <div>
//       <button
//         class="btn btn-danger"
//         onClick={() => {
//           setModalOpen(false);
//           setModaltype("");
//         }}
//       >
//         Close
//       </button>
//       <AddQuestionModal data={props} />
//     </div>
//   </Modal>

//   <Modal
//     isOpen={modalType === "view_question" ? true : false}
//     // onAfterOpen={()=>}
//     // onRequestClose={closeModal}
//     style={customStyles}
//     contentLabel="Example Modal"
//   >
//     <div>
//       <button
//         class="btn btn-danger"
//         onClick={() => {
//           setModalOpen(false);
//           setModaltype("");
//         }}
//       >
//         Close
//       </button>
//       <ViewQuestionModal data={props} />
//     </div>
//     </Modal>

//   <Modal
//     isOpen={modalType === "student_marks" ? true : false}
//     // onAfterOpen={()=>}
//     // onRequestClose={closeModal}
//     style={customStyles}
//     contentLabel="Example Modal"
//   >
//     <div>
//       <button
//         class="btn btn-danger"
//         onClick={() => {
//           setModalOpen(false);
//           setModaltype("");
//           dashboard.student_marks = [];
//         }}
//       >
//         Close
//       </button>
//     </div>

//     <section>
//       <table class="table table-striped table-responsive ">
//         <thead>
//           <tr>
//             <th scope="col">Sl No</th>
//             <th scope="col">Name</th>
//             <th scope="col">Grade</th>
//             <th scope="col">Percentage</th>
//           </tr>
//         </thead>
//         <tbody>
//           {dashboard.student_marks.map((student, i) => {
//             return (
//               <tr>
//                 <th scope="row">{i + 1}</th>
//                 <td>{student.name}</td>
//                 <td>{student.grade}</td>
//                 <td>{student.percentage}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </section>
//   </Modal>
