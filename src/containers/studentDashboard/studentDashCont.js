import React, {Component} from "react";

import {connect} from "react-redux";
// import Dashboard from "../../components/dashboard/dashboard";
import StudentDash from "../../components/studentDashboard/StudentDash";
import { close_snack_bar} from "../../actions/snackbar/snackbar_action";
import { start_exam } from "../../actions/startExam/startExamAction";
import { set_all_quiz } from "../../actions/allQuiz/allQuizAction";
import { get_dashboard_data } from "../../actions/dashboard/dashboardActions";


export class StudentDashboardContainer extends Component {
    render() {
        return (
            <StudentDash {...this.props} />
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
        allQuiz : store.allQuiz.quiz_set
    };
};
export const mapDispatchToProps = dispatch => {
    return {

            start_exam : ()=>{
                    dispatch(start_exam());
            },
            
            set_all_quiz:()=>{
                    dispatch(set_all_quiz());
            },

            get_dashboard_data:() =>{
                dispatch(get_dashboard_data());
            }
//        
        };
};
// export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
export default connect(mapStateToProps,mapDispatchToProps)(StudentDashboardContainer);

