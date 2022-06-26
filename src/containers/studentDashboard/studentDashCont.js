import React, {Component} from "react";

import {connect} from "react-redux";
// import Dashboard from "../../components/dashboard/dashboard";
import StudentDash from "../../components/studentDashboard/StudentDash";
import { close_snack_bar} from "../../actions/snackbar/snackbar_action";
import { start_exam } from "../../actions/startExam/startExamAction";



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
        startExam:store.startExam
    };
};
export const mapDispatchToProps = dispatch => {
    return {

            start_exam : ()=>{
                    dispatch(start_exam());
            }

//        
        };
};
// export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
export default connect(mapStateToProps,mapDispatchToProps)(StudentDashboardContainer);

