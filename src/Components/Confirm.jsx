import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { Container, height, margin, padding } from '@mui/system';
import Alert from '@mui/material/Alert';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import dr from "./img2/10.jpg"
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  export default function ColumnsGrid() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Typography component='div' style={{backgroundColor:'gray',display:'flex'}}>  
        <Typography component='div' style={{width:'100%',height:'80px'}}>
     
        <a href  style={{color:'black',fontWeight:'bold', display:'flex',marginLeft:'5%',marginTop:'2%'}}>Confirm Order</a>
        </Typography>
        </Typography>
        <Container style={{marginTop:'5%'}}>
            <Typography style={{fontWeight:'bold',color:'gray'}}>DELIVERY</Typography>
            <Typography>
            <ExitToAppIcon style={{marginTop:'3%',width:'3%',height:'3%'}}/>
            </Typography>
            <Typography style={{color:'black',fontWeight:'bold',marginTop:'-3%',marginLeft:'4%'}}>Express Delivery-</Typography>
            <Typography>
            <AddLocationAltIcon style={{marginTop:'3%'}}/>
            <Typography style={{color:'black',fontWeight:'bold',marginTop:'-3%',marginLeft:'4%'}}>Komol KucharovChilanzar 26,d.25,kv.17,<br/>Tashkent,100 131</Typography>
            </Typography>
            <Typography style={{color:'grey',fontWeight:'bold',marginTop:'4%'}}>Cart</Typography>
            <Typography>
              <img style={{width:'13%',height:'8%',marginTop:'3%',marginLeft:'-3%'}} src={dr} alt=""/>
            </Typography>
            <Typography style={{color:'black',fontWeight:'bold',marginTop:'-10%',marginLeft:'13%'}} >Lyle & Scrott Men's Short<br/>Sleeve Camo Pocket</Typography>
            <Typography style={{marginLeft:'13%',marginTop:'3%',color:'grey'}}>XXL White 1<br/>pcs</Typography>
            <Typography style={{marginTop:'-9%',marginLeft:'40%',fontWeight:'bold'}}>$7<br/>6</Typography>
            <Typography style={{color:'grey',marginLeft:'32%',marginTop:'5%'}}>Total</Typography>
            <Typography style={{marginTop:'-3%',marginLeft:'37%',fontWeight:'bold'}}>&7<br/>6</Typography>
            <Typography style={{marginTop:'3%',color:'grey'}}>PAYMENT</Typography>
            <Typography>
            <CreditCardIcon style={{marginTop:'3%',color:'grey',width:'3%',height:'3%'}}/>
            </Typography>
            <Typography style={{color:'black',fontWeight:'bold',marginTop:'-3%',marginLeft:'4%'}}>VISA XXXX XXXX XXXX 3734</Typography>
            <Typography>
            <Button style={{borderRadius:'20px',marginTop:'3%',marginLeft:'4%',width:'15%',color:'black'}} variant="outlined">bas</Button>
            <Button style={{borderRadius:'20px',marginTop:'3%',marginLeft:'10%',width:'20%',backgroundColor:'gray',color:'white'}} variant="outlined">< KeyboardBackspaceIcon style={{marginLeft:'-3%',color:'black'}}  />Confirm </Button>
            
            </Typography>
 
        </Container>
    
     </Box> 
    );
   } 