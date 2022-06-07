import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import dr from "./img/1.jpg"
import Button from '@mui/material/Button';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Container >
      <Grid  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          
        <Grid item xs={6}>
          <Typography style={{marginTop:"5%",marginLeft:'0%',width:'100%'}}>
              <img src={dr} alt="" style={{width:'100%'}}/>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography style={{marginTop:'10%',fontSize:'200%',marginLeft:'5%'}}>ONE COLUMN</Typography>
          <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Recusandae tenetur voluptatum voluptate modi nam perferendis iure temporibus culpa molestiae velit.<br/> Maxime dolores aut libero nemo ex eius, possimus molestiae quasi repellendus<br/> ut dolorem asperiores maiores nobis obcaecati deserunt sunt?<br/> Facere sit perspiciatis fugiat eos esse, dolorem commodi debitis sapiente<br/> id laboriosam fugit exercitationem magni? Error cupiditate officia officiis eum ipsa<br/> doloremque iure ratione odit, sunt expedita itaque maxime quasi molestiae quos.<br/></Typography>
          <Button style={{width:'55%',height:'15%',backgroundColor:'red',color:'white',fontSize:'120%'}} variant="contained" size="DUISED SITDAMENT">
          DUISED SITDAMENT
        </Button>
        </Grid>
       
      </Grid>
     </Container>

  );
}
