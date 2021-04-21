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
 
const App3 = () => {
    const [isFlipped, setFlipped] = useState(false);
 
    const front = (
        <div onClick={() => setFlipped(x => !x)} style={{ ...cardStyle, background: "#FF7000" ,width:"30vw"}}>
             <Card style={{background:"#FF7000",borderRadius:15,width:"30vw"}}>
      
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Total Users"
          height="350"
          image="https://cdn.pixabay.com/photo/2017/08/01/13/31/coffee-2565441__340.jpg" style={{height:"46vh"}}
          title="Total Users"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
       
            <center style={{ fontFamily: 'Orbitron',fontWeight:1000,color:"#131327"}}>Total Users</center>
           
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
        </div>
    );
 
    const back = (
        <div onClick={() => setFlipped(x => !x)} style={{ ...cardStyle, background: "#131327",height:"56vh",width:"30vw",cursor:"pointer" }}>
           <Typography gutterBottom variant="h5" component="h2">
       
       <center style={{ fontFamily: 'Orbitron',color:"#FF7000"}}>100</center>
      
     </Typography>
        </div>
    );
 
    return (
        <div style={{padding: 5, position: "absolute",marginTop:"8vh",marginLeft:"62.5vw"}}>
            <FlipCard isFlipped={isFlipped} front={front} back={back}/>
        </div>
    );
}
 
export default App3;