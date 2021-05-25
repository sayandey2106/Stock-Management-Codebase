import React, { useState } from 'react'
import FlipCard from 'flip-card-react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const cardStyle = {
    borderRadius: 25,
    background: "#FF7000",
};
const App1 = (props) => {
    const [isFlipped, setFlipped] = useState(false);

    const front = (
        <div onClick={() => setFlipped(x => !x)} style={{ ...cardStyle, background: "#FF7000" }}>
             <Card style={{background:"#FF7000",borderRadius: 25,width:"20vw",
   }}>

      <CardActionArea>
        <CardMedia
          component="img"
          alt="Total Consumption"
          height="350"
          image="https://cdn.pixabay.com/photo/2017/04/25/08/02/coffee-beans-2258839__340.jpg" style={{height:"34vh"}}
          title="Total Consumption"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">

            <center style={{ fontFamily: 'Orbitron',fontWeight:1000,color:"#131327"}}>Total Consumption</center>

          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
        </div>
    );

    const back = (
        <div onClick={() => setFlipped(x => !x)} style={{ ...cardStyle, background: "#131327",height:"43vh",width:"20vw",cursor:"pointer" }}>
           <Typography gutterBottom variant="h5" component="h2">
       
           <br></br><br></br><br></br><br></br><center style={{ fontFamily: 'Orbitron',color:"#FF7000"}}>{props.message}</center>
      
     </Typography>
        </div>
    );

    return (
        <div style={{padding: 5, position: "absolute",marginTop:"6.5vh",marginLeft:"14vw"}}>
            <FlipCard isFlipped={isFlipped} front={front} back={back}/>
        </div>
    );
}

export default App1;
