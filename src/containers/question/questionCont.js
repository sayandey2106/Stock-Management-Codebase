import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "../../components/question/Question";
import {
    close_snack_bar
} from "../../actions/snackbar/snackbar_action";
import { start_exam } from "../../actions/startExam/startExamAction";

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

    start_exam : (payload)=>{
        dispatch(start_exam(payload))
    }
        
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(QuestionCont);
