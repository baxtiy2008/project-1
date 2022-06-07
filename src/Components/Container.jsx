import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {Typography } from '@mui/material';
import dr from "./img/0.jpg"
import dr2 from "./img/1.jpg"
import rasim1 from "./img/0.jpg"
import rasim2 from "./img/0.jpg"
import rasim3 from "./img/0.jpg"
import Button from '@mui/material/Button';


export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={{backgroundColor:'gray',width:'100%'}} fixed>
        <Box sx={{ bgcolor: 'white', height: '100vh' }} />
        <Grid  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          
        <Grid item xs={6}>
          <Typography style={{marginTop:"-110%",marginLeft:'0%',width:'100%'}}>
              <img src={dr} alt="" style={{width:'100%'}}/>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography style={{marginTop:'-110%',fontSize:'200%',marginLeft:'5%'}}>ONE COLUMN</Typography>
          <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Recusandae tenetur voluptatum voluptate modi nam perferendis iure temporibus culpa molestiae velit.<br/> Maxime dolores aut libero nemo ex eius, possimus molestiae quasi repellendus<br/> ut dolorem asperiores maiores nobis obcaecati deserunt sunt?<br/> Facere sit perspiciatis fugiat eos esse, dolorem commodi debitis sapiente<br/> id laboriosam fugit exercitationem magni? Error cupiditate officia officiis eum ipsa<br/> doloremque iure ratione odit, sunt expedita itaque maxime quasi molestiae quos.<br/></Typography>
          <Button style={{width:'55%',height:'10%',backgroundColor:'red',color:'white',fontSize:'120%'}} variant="contained" size="DUISED SITDAMENT">
          DUISED SITDAMENT
        </Button>
        </Grid>
       
      </Grid>
      <Box sx={{ width: '100%', }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
        <Typography style={{marginTop:'10%',marginLeft:'15%',fontSize:'150%'}}>TWO COLUMNS</Typography>
          <img style={{marginTop:'0%',marginLeft:'15%',width:'85%',height:'40%',color:'white'}} src={dr} alt=""/>
          <Typography style={{marginLeft:'15%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Ut molestiae provident, cupiditate quam rem asperiores esse.<br/> Magnam amet dolorum eveniet. Maxime vel voluptate itaque,<br/> enim placeat expedita quaerat. Fuga, vel?</Typography>
          <Button style={{width:'35%',height:'10%',marginLeft:'15%', backgroundColor:'red',color:'white',fontSize:'120%'}} variant="contained" size="DETALIS">
            DETALIS
        </Button>
        </Grid>
        
        <Grid item xs={6}>
            <Typography style={{marginTop:'10%',marginLeft:'5%',fontSize:'150%'}}>TWO COLUMNS</Typography>
          <img style={{marginTop:'0%',marginLeft:'5%',width:'85%',height:'40%'}} src={dr2} alt=""/>
          <Typography style={{marginLeft:'5%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Ut molestiae provident, cupiditate quam rem asperiores esse.<br/> Magnam amet dolorum eveniet. Maxime vel voluptate itaque,<br/> enim placeat expedita quaerat. Fuga, vel?</Typography>
          <Button style={{width:'35%',height:'10%',marginLeft:'5%', backgroundColor:'red',color:'white',fontSize:'120%'}} variant="contained" size="DETALIS">
            DETALIS
        </Button>
        </Grid>
        <Grid container spacing={3}>
  <Grid item xs>
  <Typography style={{marginTop:'-5%',marginLeft:'35%',fontSize:'110%'}}>THREE COLUMNS</Typography> 
    <img style={{marginLeft:'35%',width:'100%'}} src={rasim1} alt=""/>
  </Grid>
  <Grid item xs={6}>
  <Typography style={{marginTop:'-5%',marginLeft:'25%',fontSize:'110%'}}>THREE COLUMNS</Typography>
  <img style={{marginLeft:'25%',marginTop:'3%',width:'48%'}}  src={rasim2} alt=""/>
  </Grid>
  <Grid item xs>
  <Typography style={{marginTop:'-5%',marginLeft:'-25%',fontSize:'110%'}}>THREE COLUMNS</Typography>
  <img style={{marginLeft:'-25%',width:'100%'}}  src={rasim3} alt=""/>
  </Grid>
</Grid>
    
       
      </Grid>
    </Box>
      </Container>
    </React.Fragment>
  );
}
