import React,{useState} from 'react'
import {Box, Typography,Drawer} from '@material-ui/core';
import { useStyles } from './HeaderStyles'
import Navbar from './Navbar'
import DrawerComponent from './DrawerComponent';
import { NavLink } from 'react-router-dom';

export default function HeaderComponent() {
  const classes=useStyles();
  const [initialState,setInitialState]=useState(false);
  const handleDrawerToggler=()=>{
    setInitialState(!initialState);
  };


  const navlinks=[
  {label:" Departments", Id:"notes"},
  {label:"About Us", Id:"About"},
{label:"Contact Us", Id:"Contact"},
]
console.log("header")

  return (
   
    <Box className={classes.HeaderWrapper} id="Header">
       <Navbar navlinks={navlinks} handleDrawerToggler={handleDrawerToggler}/>
       <DrawerComponent initialState={initialState} navlinks={navlinks} handleDrawerToggler={handleDrawerToggler}/>
   
      {/* <img src={Image} minHeight="90vh" height="auto" width="100%" backgroundSize="cover" backgroundRepeat="no-repeat"/> */}
      <Box className={classes.HeaderContainer}>
        <Typography variant='h3' component='h4' className={classes.headerTitle} style={{color:"black"}}><span style={{ paddingRight: "5px" }}></span>
      
        This is git notes.
        </Typography>
        <Typography variant='h3' component='h4' className={classes.headerDesc } style={{color:"black"}}>
        We provide a one stop solution for all GIT notes.</Typography>
       
      </Box>
      
    </Box>
  )
}

 
