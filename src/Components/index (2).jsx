// import React from 'react';

// export default () => {
//   return <div>Users list</div>;
// };

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';

import HeadsetIcon from '@mui/icons-material/Headset';
import ReplayIcon from '@mui/icons-material/Replay';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';

export default () => {
  return (
    <Box>
      <Typography component='div' variant='h5' style={{textAlign:'center',
      paddingBottom:'5%',paddingTop:'3%',color:'black'}}>
      Select all images with a bicycle.
      </Typography>
      <Typography style={{display:'flex'}}><img src="./img/1.jpg" alt="" style={{width:'20%',marginLeft:'15%',padding:'5px'}}/>
      <img src="./img/2.jpg" alt=""style={{width:'20%',padding:'5px'}}/>
      <img src="./img/3.jpg" alt=""style={{width:'20%',padding:'5px'}}/>
      </Typography>
    <ImageList sx={{ width:'100%', height:'100%' }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
        
      ))}
    </ImageList>
    <Typography component='div' style={{textAlign:'start'}}>
    <ReplayIcon fontSize='large'/>
    <HeadsetIcon fontSize='large'/>
    <CrisisAlertIcon fontSize='large'/>
    <Button variant="contained" size="small" style={{float:'right'}}>Verify</Button>
    </Typography>
    
    
    </Box>
  );
}

const itemData = [
  {
    img: '../img/1.jpg',
    title: 'Breakfast',
  },
  {
    img: '../img/2.jpg',
    title: 'Burger',
  },
  {
    img: '../img/3.jpg',
    title: 'Camera',
  },
  {
    img: '../img/4.jpg',
    title: 'Coffee',
  },
  {
    img: '../img/5.jpg',
    title: 'Hats',
  },
  {
    img: '../img/6.jpg',
    title: 'Honey',
  },
  {
    img:'../img/7.jpg',
    title: 'Basketball',
  },
  {
    img: '../img/8.jpg',
    title: 'Fern',
  },
  {
    img: '../img/9.jpg',
    title: 'Mushrooms',
  },
 
 
];

