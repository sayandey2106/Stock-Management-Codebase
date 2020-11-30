import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
import Logout from '../../containers/router/Lg_Cont';
// import View_user_profile_cont from "../../containers/user/user_view_profile_cont";
// import NotificationsCont from "../../containers/notifications/notificationCont";

import { Link } from "react-router-dom";
// import LG_Cont from "../../containers/router/Lg_Cont";
import {
  all_admin_option,
  all_super_admin_option,
  all_account_option,
  all_marketing_option,
  all_student_options,
  all_intrainer_option
} from "../../constants/router/router_consts";
// import Footer from "../courses/footer";
import Nav from "../../containers/home/navCont";

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "white",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  iconStyle: {
    position: "relative",
    left: 8,
    top: 3,
    fontSize: 18,
    marginRight: 5,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  grow: {
    flexGrow: 1,
  },
}));


export function SideBar({ type, open, close }) {

  const [subDivisionStyle, setSubDivisionStyle] = React.useState({
    Classes: {
      display: "none",
      transition: "display 1s"
    },
    Staffs: {
      display: "none",
      transition: "display 1s"
    },
    Masters: {
      display: "none",
      transition: "display 1s"
    }
  });

  const toggleSubdiv = (name) => {
    if (subDivisionStyle[name].display === "none")
      setSubDivisionStyle({
        ...subDivisionStyle,
        [name]: {
          ...subDivisionStyle[name],
          display: "block",
        }
      });
    else
      setSubDivisionStyle({
        ...subDivisionStyle,
        [name]: {
          ...subDivisionStyle[name],
          display: "none"
        }
      });
  }

  var side_top = (
    <div>
      {open ? (
        <div>
          <Avatar
            alt={localStorage.getItem("skyyrider_name")}
            src={localStorage.getItem("skyyrider_profile_pic")}
            className="drawer_img"
          >
            {localStorage.getItem("skyyrider_name") == null
              ? ""
              : localStorage.getItem("skyyrider_name").substring(0, 1).toUpperCase()}
          </Avatar>
          <Typography variant="subtitle1" className="profile-name">
            Hi! {localStorage.getItem("skyyrider_name")}
          </Typography>
        </div>
      ) : (
          <Avatar
            alt={localStorage.getItem("skyyrider_name")}
            src={localStorage.getItem("skyyrider_profile_pic")}
            className="drawer_img_closed"
          >
            {localStorage.getItem("skyyrider_name") == null
              ? ""
              : localStorage.getItem("skyyrider_name").substring(0, 1).toUpperCase()}
          </Avatar>
        )}
    </div>
  );

  if (type === "S") {
    return (
      <div style={{ marginTop: 10 }}>
        {side_top}
        {all_student_options.map((option) => (
          <Link
            key={option.id}
            to={option.link}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button key={option.name}>
              <ListItemIcon>
                <Icon>{option.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={option.name} />
            </ListItem>
          </Link>
        ))}
      </div>
    );
  } else if (type === "A") {
    return (
      <div style={{ marginTop: 10 }}>
        {side_top}
        {all_admin_option.map((option) =>
          option.subdivision ?
            (
              <>
                <ListItem button onClick={() => toggleSubdiv(option.name)} key={option.name} style={{ width: '100%' }} className="drawer_text">
                  <ListItemIcon>
                    <Icon className="drawer_icon">{option.icon}</Icon>
                  </ListItemIcon>
                  <ListItemText primary={option.name} />
                  <Icon>
                    {subDivisionStyle[option.name].display === 'none' ? 'expand_more' : 'expand_less'}
                  </Icon>
                </ListItem>
                <ListItem style={subDivisionStyle[option.name]}>
                  <List>
                    {option.subdivision.map(subdiv => (
                      <Link
                        key={subdiv.id}
                        to={subdiv.link}
                        style={{ textDecoration: "none", color: "black" }}
                        onClick={() => {
                          if (close)
                            close();
                        }}
                      >
                        <ListItem button key={subdiv.name}>
                          <ListItemIcon>
                            <Icon>{subdiv.icon}</Icon>
                          </ListItemIcon>
                          <ListItemText primary={subdiv.name} />
                        </ListItem>
                      </Link>
                    ))}
                  </List>
                </ListItem>
              </>)
            :
            (
              <Link
                key={option.id}
                to={option.link}
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItem button key={option.name} className="drawer_text">
                  <ListItemIcon>
                    <Icon className="drawer_icon">{option.icon}</Icon>
                  </ListItemIcon>
                  {option.name}
                </ListItem>
              </Link>
            ))}
      </div>
    );
  } else if (type === "SA") {
    return (
      <div style={{ marginTop: 10 }}>
        {side_top}
        {all_super_admin_option.map((option) => (
          <Link
            key={option.link}
            to={option.link}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button key={option.name}>
              <ListItemIcon>
                <Icon>{option.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={option.name} />
            </ListItem>
          </Link>
        ))}
      </div>
    );
  } else if (type === "T") {
    return (
      <div style={{ marginTop: 10 }}>
        {side_top}
        {all_intrainer_option.map((option) => (
          <Link
            key={option.link}
            to={option.link}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button key={option.name}>
              <ListItemIcon>
                <Icon>{option.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={option.name} />
            </ListItem>
          </Link>
        ))}
      </div>
    );
  } else if (type === "AT") {
    return (
      <div style={{ marginTop: 10 }}>
        {side_top}
        {all_account_option.map((option) => (
          <Link
            key={option.link}
            to={option.link}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button key={option.name}>
              <ListItemIcon>
                <Icon>{option.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={option.name} />
            </ListItem>
          </Link>
        ))}
      </div>
    );
  } else if (type === "M") {
    return (
      <div style={{ marginTop: 10 }}>
        {side_top}
        {all_marketing_option.map((option) => (
          <Link
            key={option.link}
            to={option.link}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button key={option.name}>
              <ListItemIcon>
                <Icon>{option.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={option.name} />
            </ListItem>
          </Link>
        ))}
      </div>
    );
  }
}


function MiniDrawer(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>

          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <Icon style={{ color: "#3f51b5" }}>dehaze</Icon>
          </IconButton>


          <Link to="/">
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/skyyrider-36fe0.appspot.com/o/web%2Flogo.png?alt=media&token=f048abee-ee9e-43b9-b65c-698c2eeccd2a"
              }
              alt="no_img"
              height="45"
            />
          </Link>
          <span style={{ color: "#b30047", marginLeft: 4 }}>alpha</span>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {props.type === "S" && (
              <span>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <Avatar
                    alt={localStorage.getItem("name")}
                    src={localStorage.getItem("profile_img")}
                    className="drawer_img_closed"
                  >
                    {localStorage.getItem("name") == null
                      ? ""
                      : localStorage
                        .getItem("name")
                        .substring(0, 1)
                        .toUpperCase()}
                  </Avatar>
                  <Icon className="profile_down_icon">keyboard_arrow_down</Icon>
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  // keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                </Menu>
              </span>
            )}
            <Logout />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <Icon style={{ color: "#3f51b5" }}>keyboard_arrow_left</Icon>
          </IconButton>
        </div>
        <Divider />
        <List><SideBar type={props.type} open={open} /></List>
      </Drawer>
      {/* <Footer/> */}
    </div>
  );
}

export default MiniDrawer;
