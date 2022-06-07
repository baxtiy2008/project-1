import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// import './style.css';
import Imagelist from './index (2)';
import { Link, Typography } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import Checkbox from '@mui/material/Checkbox';
import { Container, height, margin, padding } from '@mui/system';
import DoneIcon from '@mui/icons-material/Done';
import CircularProgress from '@mui/material/CircularProgress';
import Radio from '@mui/material/Radio';

import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Stack from '@mui/material/Stack';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// https://www.figma.com/file/JwlXbAY8dUKLwHq6GojUhR/CAPTCHA-UI-Kit-(Community)?node-id=36%3A209

export default function ColumnsGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography component='div' style={{backgroundColor:'#EDF7EDFF',display:'flex'}}>
          
         
          <Typography component='div' style={{width:'10%',height:'100%'}}>
          <img src="https://cdn.worldvectorlogo.com/logos/hcaptcha-3.svg" alt=""
           style={{width:'40vh',marginLeft:'50px',marginTop:'15%'}} />
           </Typography>
           <Typography component='div' style={{marginTop:'3%',position:'relative',marginLeft:'auto',marginRight:'5%'}}>
           <a href="http://" style={{color:'black',display:'flex'}}><LinkIcon className='foo'/>Website</a>
           </Typography>
        </Typography>

      <Container style={{marginTop:'5%'}}>
        
      <Grid container spacing={2} columns={12}>
        <Grid item xs={12} md={4} sm={5} lg={5} >

        <Item style={{backgroundColor:'#EDF7EDFF',border:'1px solid #D6D6D6',}}>
            <Typography component='div' style={{display:'flex',textAlign:'start'}}>
          <Alert icon={<Checkbox fontSize="large"/>} severity="success" 
          style={{fontSize:'150%',paddingTop:'5%',paddingBottom:'5%'}}>
          I am human
      </Alert>
      <img src='/img/captchat.jpg' alt="" width='15%' height='15%'          style={{marginLeft:'28%',marginTop:'1%'}}/>
      </Typography>
      <Typography style={{marginTop:'-6%',marginLeft:'65%',fontWeight:'bold',color:"black"}}>hCaptca</Typography>
      <Typography style={{marginTop:'-2%',marginLeft:'65%'}}>Privecy-Terms</Typography>
          </Item>

          <Item style={{backgroundColor:'#EDF7EDFF',border:'1px solid #D6D6D6',marginTop:'12%'}}>
            <Typography component='div' style={{display:'flex',textAlign:'start'}}>
          <Alert icon={<Checkbox fontSize="large"/>} severity="success" 
           style={{fontSize:'150%',paddingTop:'5%',paddingBottom:'5%'}}>
           I am human
      </Alert>
      <img src='/img/captchat.jpg' alt="" width='15%' height='15%'          style={{marginLeft:'28%',marginTop:'1%'}}/>
      </Typography>
      <Typography style={{marginTop:'-6%',marginLeft:'65%',fontWeight:'bold',color:"black"}}>hCaptca</Typography>
      <Typography style={{marginTop:'-2%',marginLeft:'65%'}}>Privecy-Terms</Typography>
      
  
          </Item>


          <Item style={{backgroundColor:'#EDF7EDFF',border:'1px solid #D6D6D6',marginTop:'12%'}}>
            <Typography component='div' style={{display:'flex',textAlign:'start'}}>
          <Alert icon={<Radio  fontSize="large"/>} severity="success" 
          style={{fontSize:'150%',paddingTop:'5%',paddingBottom:'5%'}}>
          I'm not a robot 
      </Alert>
      <img src='/img/captchat.jpg' alt="" width='15%' height='15%'          style={{marginLeft:'22%',marginTop:'1%'}}/>
      </Typography>
      <Typography style={{marginTop:'-6%',marginLeft:'65%',fontWeight:'bold',color:"black"}}>hCaptca</Typography>
      <Typography style={{marginTop:'-2%',marginLeft:'67%'}}>Privecy-Terms</Typography>
          
      
          </Item>

          <Item style={{backgroundColor:'#EDF7EDFF',border:'1px solid #D6D6D6',marginTop:'12%'}}>
            <Typography component='div' style={{display:'flex',textAlign:'start'}}>
          <Alert icon={<CheckIcon fontSize="large" style={{color:'green'}}/>} severity="success" 
          style={{fontSize:'150%'}}>
          I'm not a robot 
      </Alert>
      <img src='/img/captchat.jpg' alt="" width='15%' height='15%'          style={{marginLeft:'24%',marginTop:'1%'}}/>
      </Typography>
      <Typography style={{marginTop:'0%',marginLeft:'65%',fontWeight:'bold',color:"black"}}>hCaptca</Typography>
      <Typography style={{marginTop:'-2%',marginLeft:'65%'}}>Privecy-Terms</Typography> 
            
      
          </Item>
          <Item style={{backgroundColor:'#EDF7EDFF',border:'1px solid #D6D6D6',marginTop:'12%'}}>
          <Typography className='typ'>verifcation expired. check the checkbox agin</Typography>
            <Typography component='div' style={{display:'flex',textAlign:'start'}}>
          <Alert icon={<Checkbox fontSize="large" style={{color:'red'}}/>} severity="success" 
          style={{fontSize:'150%'}}>
          I'm not a robot 
      </Alert>
      <img src='/img/captchat.jpg' alt="" width='15%' height='15%'          style={{marginLeft:'22%',marginTop:'1%'}}/>
      </Typography>
      <Typography style={{marginTop:'-0%',marginLeft:'65%',fontWeight:'bold',color:"black"}}>hCaptca</Typography>
      <Typography style={{marginTop:'-2%',marginLeft:'67%'}}>Privecy-Terms</Typography>
            
    
          </Item>

          
        </Grid>
        <Grid item xs={12} md={7} sm={6} lg={6} style={{marginLeft:'8%',paddingTop:'%'}}>
          <Item>
            <Imagelist/>
          </Item>
        </Grid>
      </Grid>

      <Typography component='div' style={{marginTop:'10%',marginBottom:'10%'}}>
        <Typography>
          <img src="/img/captchat.jpg" alt=""/>
          <img style={{marginLeft:'15%',width:'5%'}} src="/img/captchat.jpg" alt=""/>
          <Typography style={{marginLeft:'27%',marginTop:'-4%',fontWeight:'bold'}}>hCaptchat</Typography>
        </Typography>
        
      </Typography>
      </Container>
    </Box>
  );
}
