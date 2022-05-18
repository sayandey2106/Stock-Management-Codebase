import React, { Component } from "react/index.js";
import Grid from "@material-ui/core/Grid";
import CardHeader from "../cards/CardHeader.js";
import CardIcon from "../cards/CardIcon.js";
import Card from "../cards/Card.js";
import withStyles from "@material-ui/core/styles/withStyles";
import Snackbar from "../snackbar/snackbar";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Icon from "@material-ui/core/Icon";
import { styles } from "../../styles/style";
import LoaderCon from "../../containers/loader/loader_cont";
import Avatar from "@material-ui/core/Avatar";
// import { Tooltip } from "bootstrap";
import { DialogActions, TextField, Tooltip, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";


const card = {
  borderRadius: "10px",
  backgroundColor: "#ffffff",
  margin: "100px 10px 10px 60px",
  width: "80vw",
};
const dialogContent = {
  height: "400px",
  width: "300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

};
const avatar = {
  height: "100px",
  width: "100px"
};
const text = {
  paddingTop: "15px",
  fontSize: "15px",
  fontWeight: "600"
}

// eslint-disable-next-line no-unused-vars

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users_dialog: false,
      today: false,
      user_name: ""
    };
  }

  componentDidMount() {
    this.props.get_all_user(this.props.login.company_id);
  }

  handleClose = () => {
    this.setState({
      today: false,
      delete: false,
      update: false,
      //   thumbs_up_dialog: false,
      thumbs_down_dialog: false,
      users_dialog: false,

    });
  };

  render() {
    const {
      snackbar,
      close_snack_bar,
      user,
      lead,
      add_users,
      get_today_user_lead,

      // toggle_active_user,
      login,
    } = this.props;
    console.log(user.all_lead);
    return (
      <Grid container justify="center">
        <Grid item xs={12}>
          <Card style={card}>
            <CardHeader color="warning" stats icon>
              <CardIcon color="rose">
                <h3>VIEW USER</h3>
              </CardIcon>
            </CardHeader>
            <CardContent>
              <Grid item lg={12}>
                {/* <Link to="add_user" style={{textDecoration: "none"}}> */}
                <IconButton onClick={() => { this.setState({ users_dialog: true }) }}>
                  <Icon>add</Icon>
                </IconButton>
                {/* </Link> */}
              </Grid>
              <Table>
                <TableHead>
                  <TableRow>
                    {/* <TableCell align="left">&nbsp;&nbsp;Profile Pic</TableCell> */}
                    <TableCell align="left">&nbsp;&nbsp;Name</TableCell>
                    <TableCell align="left">E-Mail</TableCell>
                    <TableCell align="left">Phone Number</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {user.all_user.map((row) => (

                    <TableRow >

                      <TableCell align="left">&nbsp;&nbsp;{row.user_name}</TableCell>
                      <TableCell align="left">
                        &nbsp;&nbsp;{row.email}
                      </TableCell>
                      <TableCell align="left">
                        &nbsp;&nbsp;{row.contact_no}
                      </TableCell>
                      <TableCell align="right">
                        <Tooltip title="Today's Work">
                          <IconButton onClick={() => {
                            get_today_user_lead(row._id);
                            this.setState({ today: true, name: row.user_name })
                          }}>
                            <Icon>task_alt</Icon>
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="All Work">
                          <Link style={{ textDecoration: 'none' }} to={{
                            pathname: "/lead",
                            // search: "?sort=name",
                            // hash: "#the-hash",
                            state: { user_id: row._id, }
                          }}>
                            <IconButton>
                              <Icon>task</Icon>
                            </IconButton>
                          </Link>
                        </Tooltip>
                      </TableCell>


                    </TableRow>
                    // </Link>
                  ))}
                </TableBody>

                <Dialog
                  open={this.state.users_dialog}
                  onClose={() => this.handleClose()}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="form-dialog-title">
                    Add User
                  </DialogTitle>
                  <DialogContent style={dialogContent} >
                    <TextField name="Name" label="Name" onChange={(e) => {
                      this.setState({
                        name: e.target.value
                      })
                    }} /><br />
                    <TextField name="Name" label="Email" onChange={(e) => {
                      this.setState({
                        email: e.target.value
                      })
                    }} /><br />
                    <TextField name="Name" label="Phone" onChange={(e) => {
                      this.setState({
                        phone: e.target.value
                      })
                    }} /><br />
                    <TextField name="Name" label="Password" onChange={(e) => {
                      this.setState({
                        password: e.target.value
                      })
                    }} /><br />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => { add_users(this.state.name, this.state.email, this.state.phone, this.state.password) }}>ADD</Button>
                    <Button onClick={() => { this.handleClose() }} autoFocus>
                      Cancel
                    </Button>
                  </DialogActions>
                </Dialog>

              </Table>

            </CardContent>
          </Card>

          <Dialog
            open={this.state.today}
            fullScreen={true}
            onClose={() => this.handleClose()}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Card style={card}>
              <CardHeader color="warning" stats icon>
                <CardIcon color="rose">
                  <h3>{this.state.name}'s Task</h3>
                </CardIcon>
              </CardHeader>
              <CardContent>
                <h3>10 AM- 10.59 AM</h3>
                <Table>
                  <TableHead>
                    <TableRow>
                      {/* <TableCell align="left">&nbsp;&nbsp;Profile Pic</TableCell> */}
                      <TableCell align="left">&nbsp;&nbsp;Name</TableCell>
                      <TableCell align="left">E-Mail</TableCell>
                      <TableCell align="left">Phone Number</TableCell>
                      <TableCell align="left">Remark</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {user.all_lead.map((row) => (
                      row.time.split(":", 1).toString() === "10" &&
                      // <Link style={{textDecoration:'none',width:'100%'}} to={{
                      //   pathname: "/lead",
                      //   // search: "?sort=name",
                      //   // hash: "#the-hash",
                      //   state: { user_id: row._id }
                      // }}>
                      <TableRow >
                        {}
                        <TableCell align="left">&nbsp;&nbsp;{row.name}</TableCell>
                        <TableCell align="left">
                          &nbsp;&nbsp;{row.email}
                        </TableCell>
                        <TableCell align="left">
                          &nbsp;&nbsp;{row.phone}
                        </TableCell>
                        <TableCell align="left">
                          &nbsp;&nbsp;{row.remark}
                        </TableCell>



                      </TableRow>
                      // </Link>
                    ))}
                  </TableBody>
                </Table>




                <h3>11 AM- 11.59 AM</h3>
                <Table>
                  <TableHead>
                    <TableRow>
                      {/* <TableCell align="left">&nbsp;&nbsp;Profile Pic</TableCell> */}
                      <TableCell align="left">&nbsp;&nbsp;Name</TableCell>
                      <TableCell align="left">E-Mail</TableCell>
                      <TableCell align="left">Phone Number</TableCell>
                      <TableCell align="left">Remark</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {user.all_lead.map((row) => (
                      row.time.split(":", 1).toString() === "11" &&
                      // <Link style={{textDecoration:'none',width:'100%'}} to={{
                      //   pathname: "/lead",
                      //   // search: "?sort=name",
                      //   // hash: "#the-hash",
                      //   state: { user_id: row._id }
                      // }}>
                      <TableRow >

                        <TableCell align="left">&nbsp;&nbsp;{row.name}</TableCell>
                        <TableCell align="left">
                          &nbsp;&nbsp;{row.email}
                        </TableCell>
                        <TableCell align="left">
                          &nbsp;&nbsp;{row.phone}
                        </TableCell>
                        <TableCell align="left">
                          &nbsp;&nbsp;{row.remark}
                        </TableCell>



                      </TableRow>
                      // </Link>
                    ))}
                  </TableBody>
                </Table>

                <h3>12 PM- 12.59 PM</h3>
                <Table>
                  <TableHead>
                    <TableRow>
                      {/* <TableCell align="left">&nbsp;&nbsp;Profile Pic</TableCell> */}
                      <TableCell align="left">&nbsp;&nbsp;Name</TableCell>
                      <TableCell align="left">E-Mail</TableCell>
                      <TableCell align="left">Phone Number</TableCell>
                      <TableCell align="left">Remark</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {user.all_lead.map((row) => (
                      
                      row.time.split(":", 1).toString() === "12" &&
                      
                      // <Link style={{textDecoration:'none',width:'100%'}} to={{
                      //   pathname: "/lead",
                      //   // search: "?sort=name",
                      //   // hash: "#the-hash",
                      //   state: { user_id: row._id }
                      // }}>
                      <TableRow >

                        <TableCell align="left">&nbsp;&nbsp;{row.name}</TableCell>
                        <TableCell align="left">
                          &nbsp;&nbsp;{row.email}
                          
                        </TableCell>
                        <TableCell align="left">
                          &nbsp;&nbsp;{row.phone}
                        </TableCell>
                        <TableCell align="left">
                          &nbsp;&nbsp;{row.remark}
                        </TableCell>



                      </TableRow>
                      // </Link>
                    ))}
                  </TableBody>
                </Table>



                <h3>1 PM- 1.59 PM</h3>
                <Table>
                  <TableHead>
                    <TableRow>
                      {/* <TableCell align="left">&nbsp;&nbsp;Profile Pic</TableCell> */}
                      <TableCell align="left">&nbsp;&nbsp;Name</TableCell>
                      <TableCell align="left">E-Mail</TableCell>
                      <TableCell align="left">Phone Number</TableCell>
                      <TableCell align="left">Remark</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {user.all_lead.map((row) => (
                      row.time.split(":", 1).toString() === "1" &&
                      // <Link style={{textDecoration:'none',width:'100%'}} to={{
                      //   pathname: "/lead",
                      //   // search: "?sort=name",
                      //   // hash: "#the-hash",
                      //   state: { user_id: row._id }
                      // }}>
                      <TableRow >

                        <TableCell align="left">&nbsp;&nbsp;{row.name}</TableCell>
                        <TableCell align="left">
                          &nbsp;&nbsp;{row.email}
                        </TableCell>
                        <TableCell align="left">
                          &nbsp;&nbsp;{row.phone}
                        </TableCell>
                        <TableCell align="left">
                          &nbsp;&nbsp;{row.remark}
                        </TableCell>



                      </TableRow>
                      // </Link>
                    ))}
                  </TableBody>
                </Table>


                <h3>2 PM- 2.59 PM</h3>
                <Table>
                  <TableHead>
                    <TableRow>
                      {/* <TableCell align="left">&nbsp;&nbsp;Profile Pic</TableCell> */}
                      <TableCell align="left">&nbsp;&nbsp;Name</TableCell>
                      <TableCell align="left">E-Mail</TableCell>
                      <TableCell align="left">Phone Number</TableCell>
                      <TableCell align="left">Remark</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {user.all_lead.map((row) => (
                      row.time.split(":", 1).toString() === "2" &&
                      // <Link style={{textDecoration:'none',width:'100%'}} to={{
                      //   pathname: "/lead",
                      //   // search: "?sort=name",
                      //   // hash: "#the-hash",
                      //   state: { user_id: row._id }
                      // }}>
                      <TableRow >

                        <TableCell align="left">&nbsp;&nbsp;{row.name}</TableCell>
                        <TableCell align="left">
                          &nbsp;&nbsp;{row.email}
                        </TableCell>
                        <TableCell align="left">
                          &nbsp;&nbsp;{row.phone}
                        </TableCell>
                        <TableCell align="left">
                          &nbsp;&nbsp;{row.remark}
                        </TableCell>



                      </TableRow>
                      // </Link>
                    ))}
                  </TableBody>
                </Table>



                <h3>3 PM- 3.59 PM</h3>
                <Table>
                  <TableHead>
                    <TableRow>
                      {/* <TableCell align="left">&nbsp;&nbsp;Profile Pic</TableCell> */}
                      <TableCell align="left">&nbsp;&nbsp;Name</TableCell>
                      <TableCell align="left">E-Mail</TableCell>
                      <TableCell align="left">Phone Number</TableCell>
                      <TableCell align="left">Remark</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {user.all_lead.map((row) => (
                      row.time.split(":", 1).toString() === "3" &&
                      // <Link style={{textDecoration:'none',width:'100%'}} to={{
                      //   pathname: "/lead",
                      //   // search: "?sort=name",
                      //   // hash: "#the-hash",
                      //   state: { user_id: row._id }
                      // }}>
                      <TableRow >

                        <TableCell align="left">&nbsp;&nbsp;{row.name}</TableCell>
                        <TableCell align="left">
                          &nbsp;&nbsp;{row.email}
                        </TableCell>
                        <TableCell align="left">
                          &nbsp;&nbsp;{row.phone}
                        </TableCell>
                        <TableCell align="left">
                          &nbsp;&nbsp;{row.remark}
                        </TableCell>



                      </TableRow>
                      // </Link>
                    ))}
                  </TableBody>
                </Table>




                <h3>4 PM- 4.59 PM</h3>
                <Table>
                  <TableHead>
                    <TableRow>
                      {/* <TableCell align="left">&nbsp;&nbsp;Profile Pic</TableCell> */}
                      <TableCell align="left">&nbsp;&nbsp;Name</TableCell>
                      <TableCell align="left">E-Mail</TableCell>
                      <TableCell align="left">Phone Number</TableCell>
                      <TableCell align="left">Remark</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {user.all_lead.map((row) => (
                      row.time.split(":", 1).toString() === "4" &&
                      // <Link style={{textDecoration:'none',width:'100%'}} to={{
                      //   pathname: "/lead",
                      //   // search: "?sort=name",
                      //   // hash: "#the-hash",
                      //   state: { user_id: row._id }
                      // }}>
                      <TableRow >

                        <TableCell align="left">&nbsp;&nbsp;{row.name}</TableCell>
                        <TableCell align="left">
                          &nbsp;&nbsp;{row.email}
                        </TableCell>
                        <TableCell align="left">
                          &nbsp;&nbsp;{row.phone}
                        </TableCell>
                        <TableCell align="left">
                          &nbsp;&nbsp;{row.remark}
                        </TableCell>



                      </TableRow>
                      // </Link>
                    ))}
                  </TableBody>
                </Table>



                <h3>5 PM- 5.59 PM</h3>
                <Table>
                  <TableHead>
                    <TableRow>
                      {/* <TableCell align="left">&nbsp;&nbsp;Profile Pic</TableCell> */}
                      <TableCell align="left">&nbsp;&nbsp;Name</TableCell>
                      <TableCell align="left">E-Mail</TableCell>
                      <TableCell align="left">Phone Number</TableCell>
                      <TableCell align="left">Remark</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {user.all_lead.map((row) => (
                      row.time.split(":", 1).toString() === "5" &&
                      // <Link style={{textDecoration:'none',width:'100%'}} to={{
                      //   pathname: "/lead",
                      //   // search: "?sort=name",
                      //   // hash: "#the-hash",
                      //   state: { user_id: row._id }
                      // }}>
                      <TableRow >

                        <TableCell align="left">&nbsp;&nbsp;{row.name}</TableCell>
                        <TableCell align="left">
                          &nbsp;&nbsp;{row.email}
                        </TableCell>
                        <TableCell align="left">
                          &nbsp;&nbsp;{row.phone}
                        </TableCell>
                        <TableCell align="left">
                          &nbsp;&nbsp;{row.remark}
                        </TableCell>



                      </TableRow>
                      // </Link>
                    ))}
                  </TableBody>
                </Table>



                <h3>6 PM- 6.59 PM</h3>
                <Table>
                  <TableHead>
                    <TableRow>
                      {/* <TableCell align="left">&nbsp;&nbsp;Profile Pic</TableCell> */}
                      <TableCell align="left">&nbsp;&nbsp;Name</TableCell>
                      <TableCell align="left">E-Mail</TableCell>
                      <TableCell align="left">Phone Number</TableCell>
                      <TableCell align="left">Remark</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {user.all_lead.map((row) => (
                      row.time.split(":", 1).toString()  === "6" &&
                      // <Link style={{textDecoration:'none',width:'100%'}} to={{
                      //   pathname: "/lead",
                      //   // search: "?sort=name",
                      //   // hash: "#the-hash",
                      //   state: { user_id: row._id }
                      // }}>
                      <TableRow >

                        <TableCell align="left">&nbsp;&nbsp;{row.name}</TableCell>
                        <TableCell align="left">
                          &nbsp;&nbsp;{row.email}
                        </TableCell>
                        <TableCell align="left">
                          &nbsp;&nbsp;{row.phone}
                        </TableCell>
                        <TableCell align="left">
                          &nbsp;&nbsp;{row.remark}
                        </TableCell>



                      </TableRow>
                      // </Link>
                    ))}
                  </TableBody>
                </Table>



                <h3>7 PM- 7.59 PM</h3>
                <Table>
                  <TableHead>
                    <TableRow>
                      {/* <TableCell align="left">&nbsp;&nbsp;Profile Pic</TableCell> */}
                      <TableCell align="left">&nbsp;&nbsp;Name</TableCell>
                      <TableCell align="left">E-Mail</TableCell>
                      <TableCell align="left">Phone Number</TableCell>
                      <TableCell align="left">Remark</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {user.all_lead.map((row) => (
                      row.time.split(":", 1).toString() === "7" &&
                      // <Link style={{textDecoration:'none',width:'100%'}} to={{
                      //   pathname: "/lead",
                      //   // search: "?sort=name",
                      //   // hash: "#the-hash",
                      //   state: { user_id: row._id }
                      // }}>
                      <TableRow >

                        <TableCell align="left">&nbsp;&nbsp;{row.name}</TableCell>
                        <TableCell align="left">
                          &nbsp;&nbsp;{row.email}
                        </TableCell>
                        <TableCell align="left">
                          &nbsp;&nbsp;{row.phone}
                        </TableCell>
                        <TableCell align="left">
                          &nbsp;&nbsp;{row.remark}
                        </TableCell>



                      </TableRow>
                      // </Link>
                    ))}
                  </TableBody>
                </Table>
                <DialogActions>
                  {/* <Button onClick={() => { add_users(this.state.name, this.state.email, this.state.phone, this.state.password) }}>ADD</Button> */}
                  <Button variant="outlined" color="secondary" onClick={() => { this.handleClose() }} autoFocus>
                    Close
                  </Button>
                </DialogActions>



              </CardContent>
            </Card>

          </Dialog>

          <LoaderCon />
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

export default withStyles(styles)(User);
