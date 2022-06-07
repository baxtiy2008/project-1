

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { CardActionArea } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import dr from './img/0.jpg'


export default function ActionAreaCard() {
  return (
    <Card sx={{width:"100%" ,backgroundImage:`url(${'./img/welcome-bg.jpg'})` }}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="50"
          height="140"
          style={{display:'block',marginLeft:'auto',marginRight:'auto',width:'80%'}}
          image="./img/header.png"
          alt=""
        />
        <Grid container spacing={1}>
  
  <Grid item xs={6}>
  <Typography style={{position:"absolute", top:'5%',left:'45%',color:'white',fontSize:'280%'}}>MOTOR</Typography>
  </Grid>
  
</Grid>
        
        <div style={{position:'relative',marginTop:'-3%',left:'20%'}}>
        <Button style={{marginLeft:'10%',paddingRight:'5%',color:'red'}}>Home</Button>
        <Button style={{marginLeft:'-3%'}} >Products</Button>
        <Button style={{marginLeft:'3%'}} >Services</Button>
        <Button style={{marginLeft:'3%'}} >Galery</Button>
        <Button style={{marginLeft:'3%'}} >Contact</Button>
      </div>
      
<Container>
<Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
    <Typography style={{marginTop:'20%'}}>
    <img src={dr} alt=""/>
    </Typography>
  </Grid>
  <Grid item xs={6}>
    <Typography style={{marginTop:'20%',marginLeft:'-55%',fontSize:'200%',color:'red'}}>
    <b>PERFORMANCE</b>
     </Typography>
     <Typography style={{fontSize:'300%',marginLeft:'-55%',color:'white'}}>FOR THE SPEED</Typography>
     <Typography style={{marginLeft:'-55%',color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam porro <br/>iure adipisci distinctio rem minus commodi ratione quasi labore facere mollitia<br/> perferendis ipsam maiores doloremque explicabo, illo tempore fuga.</Typography>
  </Grid>
</Grid>
</Container>
        
      </CardActionArea>
    </Card>
  );
}
