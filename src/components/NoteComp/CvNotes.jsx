import React,{useState} from 'react'
import {Box, Typography,Drawer} from '@material-ui/core';
import { useStyles } from '../Headercomponents/HeaderStyles'
import Files from './Files'
import { posts } from '../../data';
import { Link } from 'react-router-dom';
import NewNav from './NewNav';
import DrawerNew from './DrawerNew';

export default function CvNotes({props}) {
  const classes=useStyles();
  const [initialState,setInitialState]=useState(false);
  const handleDrawerToggler=()=>{
    setInitialState(!initialState);
  };



const links=[
    {
        id:1,
        link:'/cv/cv1'
    },
    {
        id:2,
        link:'/cv/cv2'
    },
    {
        id:3,
        link:'/cv/cv3'
    },
    {
        id:4,
        link:'/cv/cv4'
    },
    {
        id:5,
        link:'/cv/cv5'
    },
    {
        id:6,
        link:'/cv/cv6'
    },
]

  return (
   <>
   
    <Box className={classes.HeaderWrapper} id="Header">
   
       <NewNav handleDrawerToggler={handleDrawerToggler}/>
      
    <DrawerNew initialState={initialState} handleDrawerToggler={handleDrawerToggler}/>
    
    <Box className={classes.HeaderContainer1}>
  
    <Box style={{justifyContent:"center"}}>
    <Typography style={{color:"black",justifyContent:"center",marginBottom:"40px",marginTop:"-60px",marginLeft:"50px"}} align="center" variant="h4">{props}</Typography>
    <Typography style={{color:"black",justifyContent:"center",marginBottom:"80px",marginLeft:"50px"}} align="center" variant="body">
{links.map(item=>(
    <Link to={item.link} style={{textDecoration:"none",color:"black",fontSize:"20px",padding:"10px"}}>{item.id}</Link>
))}
    </Typography>
    <Files/>
    </Box>
        
     
      </Box>
    
      {/* <img src={Image} minHeight="90vh" height="auto" width="100%" backgroundSize="cover" backgroundRepeat="no-repeat"/> */}
      
     
    </Box>
 
    

  </>
  )
}

 
