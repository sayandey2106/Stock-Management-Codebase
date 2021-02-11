import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Controller_con from "../../containers/router/controller_cont";
import Login from "../../containers/loginCont";
import Drawer_option_con from "../../containers/router/drawer_cont"
import Category from "../../containers/category/categoryContainer"
import Request from "../../containers/request/requestContainer";
import Dashboard from "../dashboard";
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
                        {/* <Route path="/survey" component={Survey} /> */}
                    </main>
                </div>
        } else {
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
                        <Route exact path="/category" component={Category}/>
                        <Route exact path="/request" component={Request}/>
                        <Route exact path="/dashboard" component={Dashboard}/>
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
