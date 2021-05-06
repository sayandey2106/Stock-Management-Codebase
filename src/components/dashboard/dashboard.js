import React, {Component} from "react/index.js";
import Card1 from './card1'
import Card2 from './card2'
import Card3 from './card3'
import Card4 from './card4'
import Card5 from './card5'
import Card6 from './card6'
import Card7 from './card7'
import withStyles from "@material-ui/core/styles/withStyles";
import {Badge} from "@material-ui/core";
import {styles} from "../../styles/style";
import Grid from "@material-ui/core/Grid";
import Card from "../cards/Card";
import CardHeader from "../cards/CardHeader";
import CardIcon from "../cards/CardIcon";
import CardContent from "@material-ui/core/CardContent";
import LoaderCon from "../../containers/loader/loader_cont";
import Snackbar from "../snackbar/snackbar";

const card = {
    borderRadius: "20px",
    backgroundColor: "#ffffff",
    marginTop: 50
};
// eslint-disable-next-line no-unused-vars
withStyles(theme => ({
    badge: {
        backgroundColor: "green",
        color: "green",
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        "&::after": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            border: "1px solid currentColor",
            content: '""'
        }
    }
}))(Badge);

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        console.log(this.props.login)
        this.props.qb_dashboard(this.props.login.company_id)
    }

    render() {
        const {
            snackbar,
            close_snack_bar,
        } = this.props;
        return (
            <Grid container justify="center">
                <Grid item xs={12}>
                    <div className="Dashboard">
                        <Card1 message="Hello World"/>
                        <Card2/>
                        <Card3/>
                        <Card4/>
                        <Card5/>
                        <Card6/>
                        <Card7/>
                    </div>
                    <LoaderCon/>
                    <Snackbar
                        open={snackbar.response_received}
                        close_snack_bar={close_snack_bar}
                        message={snackbar.message}
                    />
                </Grid>
            </Grid>
        );
    }


}

export default withStyles(styles)(Dashboard);
