import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './App.css'

const useStyles = makeStyles({
    parentroot:{
        marginTop:0,
    },
    childroot1:{
        display:"inline-block",
        marginTop: 80,
        marginLeft: 30,
        maxWidth: 455,
        transition: "transform 1s",
        transformStyle: "preserve-3d",
        '&:hover':{
            transform: "rotateY(180deg)",
            transition: "transform 1s",}
        
    },
    rootf1: {
    backgroundColor: "#FF7000",
    borderRadius: 15,
    color: "#000033",
    
  },
  childroot2:{
    display:"inline-block",
    marginTop: -360,
    marginLeft: 15,
    maxWidth: 455,
    transition: "transform 1s",
        transformStyle: "preserve-3d",
        '&:hover':{
            transform: "rotateY(180deg)",
            transition: "transform 1s",}
},
  rootf2: {
    backgroundColor: "#FF7000",
    borderRadius: 15,
    color: "#000033",
  },
  childroot3:{
    display:"block",
    marginTop: -425,
    marginLeft: 970,
    maxWidth: 455,
    transition: "transform 1s",
        transformStyle: "preserve-3d",
        '&:hover':{
            transform: "rotateY(180deg)",
            transition: "transform 1s",}
},
  rootf3: {
    backgroundColor: "#FF7000",
    borderRadius: 15,
    color: "#000033",
  },
  childroot4:{
    display:"inline-block",
    marginTop: 10,
    marginLeft: 30,
    maxWidth: 335,
    transition: "transform 1s",
        transformStyle: "preserve-3d",
        '&:hover':{
            transform: "rotateY(180deg)",
            transition: "transform 1s",}
},
  rootf4: {
    backgroundColor: "#FF7000",
    borderRadius: 15,
    color: "#000033",
  },
  childroot5:{
    display:"inline-block",
    marginTop: -440,
    marginLeft: 20,
    maxWidth: 335,
    transition: "transform 1s",
        transformStyle: "preserve-3d",
        '&:hover':{
            transform: "rotateY(180deg)",
            transition: "transform 1s",}
},
  rootf5: {
    backgroundColor: "#FF7000",
    borderRadius: 15,
    color: "#000033",
  },
  childroot6:{
    display:"block",
    marginTop: -455,
    marginLeft: 738,
    maxWidth: 335,
    transition: "transform 1s",
        transformStyle: "preserve-3d",
        '&:hover':{
            transform: "rotateY(180deg)",
            transition: "transform 1s",}
},
  rootf6: {
    backgroundColor: "#FF7000",
    borderRadius: 15,
    color: "#000033",
  },
  childroot7:{
    display:"block",
    marginTop: -450,
    marginLeft: 1090,
    maxWidth: 335,
    transition: "transform 1s",
        transformStyle: "preserve-3d",
        '&:hover':{
            transform: "rotateY(180deg)",
            transition: "transform 1s",}
},
  rootf7: {
    backgroundColor: "#FF7000",
    borderRadius: 15,
    color: "#000033",
  },
});


export default function ImgMediaCard() {
  const classes = useStyles();

  return (
  <div className={classes.parentroot}>
  <div className={classes.childroot1}>
      <Card className={classes.rootf1}>
      
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="350"
            image="https://cdn.pixabay.com/photo/2017/04/25/08/02/coffee-beans-2258839__340.jpg" style={{height:350}}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
         
              <center style={{ fontFamily: 'Orbitron' }}>Total Consumption</center>
             
            </Typography>
          </CardContent>
        </CardActionArea>
        
      </Card>
      </div>
      <div className={classes.childroot2}>
      <Card className={classes.rootf2}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="350"
            image="https://cdn.pixabay.com/photo/2020/12/25/15/43/mens-hands-5859605__340.jpg "style={{height:350}}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <center style={{ fontFamily: 'Orbitron' }}>Total Due</center>
            </Typography>

          </CardContent>
        </CardActionArea>
      </Card>
      </div>
            <div className={classes.childroot3}>
      <Card className={classes.rootf3}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="350"
            image="https://cdn.pixabay.com/photo/2017/08/01/13/31/coffee-2565441__340.jpg" style={{height:350}}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <center style={{ fontFamily: 'Orbitron' }}>Total Users</center>
            </Typography>

          </CardContent>
        </CardActionArea>
      </Card>
      </div>
      <div className={classes.childroot4}>
      <Card className={classes.rootf4}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="350"
            image="https://media.istockphoto.com/photos/desktop-calendar-2020-picture-id1152969647?b=1&k=6&m=1152969647&s=170667a&w=0&h=fXfHliZSIOQ0Q-a87W-B8iIa9DWjV_CrhtDA0w89NGY=" style={{height:350}}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <center style={{ fontFamily: 'Orbitron' }}>Consumption Per Month</center>
            </Typography>

          </CardContent>
        </CardActionArea>
      </Card>
      </div>
      <div className={classes.childroot5}>
      <Card className={classes.rootf5}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="350"
            image="https://cdn.pixabay.com/photo/2017/05/15/11/07/coffee-cup-2314535__340.jpg" style={{height:346}}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <center style={{ fontFamily: 'Orbitron' }}>Consumption<br/> Per Day</center>
            </Typography>

          </CardContent>
        </CardActionArea>
      </Card>
      </div>
      <div className={classes.childroot6}>
      <Card className={classes.rootf6}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="380"
            image="https://cdn.pixabay.com/photo/2019/11/11/15/32/coffee-4618705__340.jpg" style={{height:346}}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <center style={{ fontFamily: 'Orbitron' }}>Pending <br/>Requests</center>
            </Typography>

          </CardContent>
        </CardActionArea>
      </Card>
      </div>
      <div className={classes.childroot7}>
      <Card className={classes.rootf7}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="380"
            image="https://cdn.pixabay.com/photo/2017/11/24/10/43/admission-2974645__340.jpg"
            title="Contemplative Reptile" style={{height:346}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <center style={{ fontFamily: 'Orbitron' }}>Coupon <br/>Validity</center>
            </Typography>

          </CardContent>
        </CardActionArea>
      </Card>
      </div>
      
      </div>
  );
}