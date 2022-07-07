import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "../../components/question/Question";
import {
    close_snack_bar
} from "../../actions/snackbar/snackbar_action";
import { end_exam, start_exam, view_all_questions,attempt_question ,setCurrQuestionStudent} from "../../actions/startExam/startExamAction";
import { view_quiz_by_id } from "../../actions/allQuiz/allQuizAction";

export class QuestionCont extends Component {
    render() {
        return (
            // < {...this.props} />
            <Question {...this.props}/>
        );
    }
}
export const mapStateToProps = store => {
    return {
        login: store.login,
        loader: store.loader,
  startExam:store.startExam,
       allQuiz : store.allQuiz.quiz_set,
       currQuiz: store.currQuiz
    };
};
export const mapDispatchToProps = dispatch => {
    return {

    view_all_questions : (payload)=>{
        dispatch(view_all_questions(payload))
    },
    start_exam : (payload)=>{
        dispatch(start_exam(payload))
    },
    end_exam : (payload)=>{
        dispatch(end_exam(payload))
    },
    attempt_question :(quiz_id, questtion_id, option_selcted) =>{
        dispatch(attempt_question(quiz_id, questtion_id, option_selcted))
    },
    setCurrQuestionStudent :(payload)=>{
        dispatch(setCurrQuestionStudent(payload))
    },
    view_quiz_by_id:(payload)=>{
        dispatch(view_quiz_by_id(payload));
    }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(QuestionCont);
