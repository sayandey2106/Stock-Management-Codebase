import React, { useState } from 'react';
import FlipCard from 'flip-card-react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
 
const cardStyle = {
    borderRadius: 15,
    background: "#FF7000"
};
 
const App5 = () => {
    const [isFlipped, setFlipped] = useState(false);
 
    const front = (
        <div onClick={() => setFlipped(x => !x)} style={{ ...cardStyle, background: "#FF7000" ,width:"22vw"}}>
             <Card style={{background:"#FF7000",borderRadius: 15,width:"22vw"}}>
      
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Consumption/Day"
          height="350"
          image="https://cdn.pixabay.com/photo/2017/05/15/11/07/coffee-cup-2314535__340.jpg" style={{height:"46vh"}}
          title="Consumption/Day"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
       
            <center style={{ fontFamily: 'Orbitron',fontWeight:1000,color:"#131327"}}>Consumption Per<br/>  Day</center>
           
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
        </div>
    );
 
    const back = (
        <div onClick={() => setFlipped(x => !x)} style={{ ...cardStyle, background: "#131327",height:"60vh",width:"22vw" ,cursor:"pointer"}}>
           <Typography gutterBottom variant="h5" component="h2">
       
       <center style={{ fontFamily: 'Orbitron',color:"#FF7000"}}>100</center>
      
     </Typography>
        </div>
    );
 
    return (
        <div style={{padding: 5, position: "absolute",marginTop:"67vh",marginLeft:"24vw"}}>
            <FlipCard isFlipped={isFlipped} front={front} back={back}/>
        </div>
    );
}
 
export default App5;