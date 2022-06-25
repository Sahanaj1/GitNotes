// import React,{useState} from 'react'
// import {Box, Typography,Drawer, AppBar} from '@material-ui/core';
// import { useStyles } from '../Headercomponents/HeaderStyles';
// import DrawerComponent from '../Headercomponents/DrawerComponent';
// import { Link } from 'react-router-dom';
// import {Toolbar, IconButton } from '@material-ui/core'

// import { Button } from '@material-ui/core';

// import { Hidden } from '@material-ui/core';
// import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";


// export default function NewNav() {
//   const classes=useStyles();
//   const [initialState,setInitialState]=useState(false);
//   const handleDrawerToggler=()=>{
//     setInitialState(!initialState);
//   };


//   const navlinks=[
//   {label:" Departments", Id:"notes"},
//   {label:"About Us", Id:"About"},
// {label:"Contact Us", Id:"Contact"},
// ]
// console.log("header")

//   return (
   
//     <Box className={classes.HeaderWrapper} id="Header">
//        <AppBar className={classes.navbar} style={{backgroundColor:"blue"}}>
//        <Toolbar className={classes.toolbar} color="blue">
     
//      <Typography variant="h5"  to="https://github.com/Sahanaj1"
//      style={{ padding:"5px", margin:"5px",color:"black"}} >
//        GITnotes
//      </Typography>

// {/* <Link to="/https://github.com/Sahanaj1" className={classes.link}>
//              Home
//            </Link> */}
//      <Box component={Hidden} xsDown>
//        <Box className={classes.new}>
//     <Link to="/head" style={{textDecoration:"none"}}><Button style={{color:"white"}}>Department</Button></Link>
//     <Link to="/head" style={{textDecoration:"none"}}><Button style={{color:"white",margin:"10px"}}>About Us</Button></Link>
    
//      </Box>
//      </Box>
//      <Box component={Hidden} smUp>
//      <IconButton color='inherit' onClick={handleDrawerToggler}>
//      <MenuOpenRoundedIcon />
//      </IconButton>
//      </Box>
//    </Toolbar>
//    </AppBar>
//     </Box>
//   )
// }


import React from 'react'
import { AppBar,Typography,Toolbar, IconButton } from '@material-ui/core'
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useStyles } from '../Headercomponents/HeaderStyles'
import { Hidden } from '@material-ui/core';
import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";
import {Link} from "react-router-dom";
import ArrowBack from '@material-ui/icons/ArrowBack';
import "../Headercomponents/new.css"
import Img1 from "../../Images/navimg.png"
export default function NewNav({handleDrawerToggler}) {
    const classes=useStyles()
  return (
    <AppBar position="fixed" className={classes.navbar} style={{backgroundColor:"white"}} >
    <Toolbar className={classes.toolbar} color="blue">
     
      <Typography variant="h5" 
      style={{ padding:"5px", margin:"5px",color:"black"}} >
        GITnotes
        <img src={Img1} className="imgNav"/>
      </Typography>


      <Box component={Hidden} xsDown>
        <Box className={classes.new}>
      <Link exact to="/" style={{textDecoration:"none",color:"black",fontSize:"20px"}}><ArrowBack/></Link>
      </Box>
      </Box>
      <Box component={Hidden} smUp>
      <IconButton color='inherit' onClick={handleDrawerToggler}>
      <MenuOpenRoundedIcon />
      </IconButton>
      </Box>
    </Toolbar>
  </AppBar>
  )
}
