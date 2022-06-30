import React, {Component} from "react";
import { BrowserRouter as Router,  Route} from "react-router-dom";
import Controller_con from "../../containers/router/controller_cont";
import Login from "../../containers/loginCont";
import Drawer_option_con from "../../containers/router/drawer_cont";

import Category from "../../containers/category/categoryContainer"
import Request from "../../containers/request/requestContainer";
import Dashboard from "../../containers/dashboard/dashboardContainer";

import Users from "../../containers/user/userContainer"
import Lead from "../../containers/lead/viewLeadCont";
import AddLead from "../../containers/lead/addLeadCont";
import ProfileCont from "../../containers/profile/profileCont";
import QuestionCont  from "../../containers/question/questionCont";
import Question from "../question/Question";
// import studentDashCont from "../../containers/studentDashboard/studentDashCont";
import  StudentDashboardContainer  from "../../containers/studentDashboard/studentDashCont";
import  SignupCont  from "../../containers/signup/signupCont";
// import QuestionCont from "../../containers/question/questionCont";
import EditProfileCont from "../../containers/profile/editProfileCont";
// Admin Imports


class Routes extends Component {

    render() {
        const {login, classes, onLogout} = this.props;
        let body;

        if (login.isHome === true) {
            body =
                <div
                    style={{
                        display: "flex",
                    }}>
                    <main
                        style={{
                            flexGrow: 1
                        }}>
                        {/* <Route exact path="/" component={Home} /> */}
                        <Route exact path="/" component={Login}/>
                        <Route path="/" component={Controller_con}/>
                        <Route exact path="/signup" component={SignupCont}/>
                        {/* <Route path="/" component={StudentDashboardContainer}/> */}
                        {/* <Route exact path="/" component={QuestionCont}/> */}
                        {/* <Route path="/" component={ProfileCont}/> */}
                      
                        {/* <Route path="/survey" component={Survey} /> */}
                    </main>
                </div>
        } else if
            (login.type==='S'){
                body =
                <div
                    style={{
                        display: "",
                    }}>
                    <Drawer_option_con
                        type={login.type}
                        onLogout={onLogout}/>
                    <main
                        style={{
                            flexGrow: 1,
                            marginTop: 40
                        }}>

                        {/* <Route exact path="/login" component={Login} /> */}
                        {/* <Route exact path="/login" component={Login} /> */}
                        <Route path="/" component={Controller_con}/>
                        {/* ADMIN ROUTES */}
                        {/* <Route exact path="/" component={Users}/> */}
                        <Route exact path="/profile" component={ProfileCont}/>
                        {/* <Route exact path="/signup" component={SignupCont}/> */}
                        <Route exact path="/" component={StudentDashboardContainer}/> 
                        <Route exact path="/quiz" component={QuestionCont}/> 
                        <Route exact path="/edit-profile" component={EditProfileCont}/> 

                        {/* <Route path="/" component={Controller_con}/> */}

                        {/* <Route exact path="/lead" component={Lead}/> */}
                        {/* <Route exact path="/addlead" component={AddLead}/> */}
                    </main>
                    {/* <Footer /> */}
                </div>
            } 
            else{
                console.log(login.type,"type");
                body =
                <div
                    style={{
                        display: "flex",
                    }}>
                    <Drawer_option_con
                        type={login.type}
                        onLogout={onLogout}/>
                    <main
                        style={{
                            flexGrow: 1,
                            marginTop: 20
                        }}
                    >
                        {/* <Route exact path="/login" component={Login} /> */}
                        {/* <Route exact path="/login" component={Login} /> */}
                        <Route path="/" component={Controller_con}/>
                        {/* ADMIN ROUTES */}
                        {/* STUDENT ROUTES */}
                        <Route exact path="/edit-profile" component={EditProfileCont}/> 
                        <Route path="/" component={ProfileCont}/>
                        {/* <Route exact path="/category" component={Category}/> */}
                        {/* <Route exact path="/request" component={Request}/> */}
                        {/* <Route exact activeClassName="active" path="/" component={Dashboard}/> */}
                        {/* <Route exact path="/" component={Users}/>
                        <Route exact path="/lead" component={Lead}/> */}
                        {/* <Route exact path="/" component={AddLead}/> */}
                    </main>
                    {/* <Footer /> */}
                </div>
            }
            
        

        return (
            <Router>
                {body}
            </Router>
        );
    }
}

export default (Routes);
