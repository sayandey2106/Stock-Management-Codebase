import React, {Component} from "react";

import {connect} from "react-redux";
// import Dashboard from "../../components/dashboard/dashboard";
import StudentDash from "../../components/studentDashboard/StudentDash";
import AdminDash from "../../components/adminDashboard/adminDash"
import { close_snack_bar} from "../../actions/snackbar/snackbar_action";
import { setCurrQuiz, start_attempt, start_exam } from "../../actions/startExam/startExamAction";
import { set_all_quiz , view_quiz_by_id , set_curr_question, view_question_by_id} from "../../actions/allQuiz/allQuizAction";
import { get_dashboard_data } from "../../actions/dashboard/dashboardActions";
import { add_quiz , edit_quiz, delete_quiz} from "../../actions/quizCrud/quizCrudAction";
import { add_question  , edit_question} from "../../actions/questionCrud/questionCrudAction";



export class AdminDashboardContainer extends Component {
    render() {
        return (
            <AdminDash {...this.props} />
        );
    }
}

export const mapStateToProps = store => {
    return {
        login: store.login,
        // loader: store.loader,
        // snackbar: store.snackbar,
        // dashboard: store.dashboard,
        // category: store.category,
        // dashboardSummary : store.dashboard.summary,
        // dashboardHistory: store.dashboard.history,
        dashboard : store.dashboard,
        startExam:store.startExam,
        allQuiz : store.allQuiz.quiz_set,
        currQuiz : store.currQuiz
    };
};
export const mapDispatchToProps = dispatch => {
    return {

            start_exam : (payload)=>{
                    dispatch(start_exam(payload));
            },
            
            set_all_quiz:()=>{
                    dispatch(set_all_quiz());
            },

            start_attempt :(payload) =>{
                dispatch(start_attempt(payload))
            },

            get_dashboard_data:() =>{
                dispatch(get_dashboard_data());
            },
            setCurrQuiz:(payload) =>{
                dispatch(setCurrQuiz(payload));
            },
            add_quiz:(payload)=>{
                dispatch(add_quiz(payload));
            },
            edit_quiz: (quiz_id, newQuiz)=>{
                dispatch(edit_quiz(quiz_id, newQuiz));
            },
            view_quiz_by_id:(payload)=>{
                dispatch(view_quiz_by_id(payload));
        },
        delete_quiz: ( newQuiz)=>{
            dispatch(delete_quiz( newQuiz));
        },
        add_question: ( quiz_id,newQuiz)=>{
            dispatch(add_question( quiz_id,newQuiz));
        },
        edit_question: ( quiz_id,newQuiz)=>{
            dispatch(edit_question( quiz_id,newQuiz));
        },
        set_curr_question: ( question_id)=>{
            dispatch(set_curr_question( question_id));
        },
        view_question_by_id:(quiz_id, question_id)=>{
            dispatch(view_question_by_id(quiz_id, question_id));
    },
            // curr_quiz : (payload) =>{
            //     dispatch(curr_quiz(payload));
            // }edit_question
//        
        };
};
// export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
export default connect(mapStateToProps,mapDispatchToProps)(AdminDashboardContainer);

