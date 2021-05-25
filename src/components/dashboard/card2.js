import React, { useState } from 'react';
import FlipCard from 'flip-card-react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const cardStyle = {
    borderRadius: 25,
    background: "#FF7000"
};

const App2 = (props) => {
    const [isFlipped, setFlipped] = useState(false);

    const front = (
        <div onClick={() => setFlipped(x => !x)} style={{ ...cardStyle, background: "#FF7000" ,width:"20vw"}}>
             <Card style={{background:"#FF7000",borderRadius: 25,width:"20vw"}}>

      <CardActionArea>
        <CardMedia
          component="img"
          alt="Total Due"
          height="350"
          image="https://cdn.pixabay.com/photo/2020/12/25/15/43/mens-hands-5859605__340.jpg " style={{height:"34vh"}}
          title="Total Due"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">

            <center style={{ fontFamily: 'Orbitron',fontWeight:1000,color:"#131327"}}>Total Due</center>

          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
        </div>
    );

    const back = (
        <div onClick={() => setFlipped(x => !x)} style={{ ...cardStyle, background: "#131327",height:"43vh",width:"20vw",cursor:"pointer" }}>
           <Typography gutterBottom variant="h5" component="h2">

           <br></br><br></br><br></br><br></br><center style={{ fontFamily: 'Orbitron',color:"#FF7000"}}>100</center>

     </Typography>
        </div>
    );

    return (
        <div style={{padding: 5, position: "absolute",marginTop:"6.5vh",marginLeft:"36.5vw"}}>
            <FlipCard isFlipped={isFlipped} front={front} back={back}/>
        </div>
    );
}

export default App2;
