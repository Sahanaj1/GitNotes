import React,{useState} from 'react'
import {Box, Typography,Drawer} from '@material-ui/core';
import { useStyles } from '../Headercomponents/HeaderStyles'
import Files from './Files'
import { posts } from '../../data';
import { Link } from 'react-router-dom';
import NewNav from './NewNav';
import DrawerNew from './DrawerNew';

export default function NoteComp({props,posts}) {
  const classes=useStyles();
  const [initialState,setInitialState]=useState(false);
  const handleDrawerToggler=()=>{
    setInitialState(!initialState);
  };



// const links=[
//     {
//         id:1,
//         link:'/cs/cs1'
//     },
//     {
//         id:2,
//         link:'/cs2'
//     },
//     {
//         id:3,
//         link:'/cs3'
//     },
//     {
//         id:4,
//         link:'/cs4'
//     },
//     {
//         id:5,
//         link:'/cs5'
//     },
//     {
//         id:6,
//         link:'/cs6'
//     },
// ]


  return (
   <>
   
    <Box className={classes.HeaderWrapper} id="Header">
   
       <NewNav handleDrawerToggler={handleDrawerToggler}/>
      
    <DrawerNew initialState={initialState} handleDrawerToggler={handleDrawerToggler}/>
    
    <Box className={classes.HeaderContainer1}>
  
    <Box style={{justifyContent:"center"}}>
    <Typography style={{color:"black",justifyContent:"center",marginBottom:"40px",marginTop:"-60px",marginLeft:"50px"}} align="center" variant="h4">{props}</Typography>
    <Typography style={{color:"black",justifyContent:"center",marginBottom:"80px",marginLeft:"50px"}} align="center" variant="body">
       {
           props=="Computer Science"? 
           <>
           {/* <Link to="/cs/cs1"style={{textDecoration:"none",margin:"20px",color:"black"}} >1</Link> */}
           {/* <Link to="/cs/cs2" style={{textDecoration:"none",margin:"20px",color:"black"}}>2</Link>
           <Link to="/cs/cs3" style={{textDecoration:"none",margin:"20px",color:"black"}}>3</Link>
           <Link to="/cs/cs4" style={{textDecoration:"none",margin:"20px",color:"black"}}>4</Link>
           <Link to="/cs/cs5" style={{textDecoration:"none",margin:"20px",color:"black"}}>5</Link>
           <Link to="/cs/cs6" style={{textDecoration:"none",margin:"20px",color:"black"}}>6</Link> */}
           </>
           :
           props=="Electronics and Communication"  ?
           <>
           <Link to="/ec/ec1"style={{textDecoration:"none",margin:"20px",color:"black"}} >1</Link>
           <Link to="/ec/ec2" style={{textDecoration:"none",margin:"20px",color:"black"}}>2</Link>
           <Link to="/ec/ec3" style={{textDecoration:"none",margin:"20px",color:"black"}}>3</Link>
           <Link to="/ec/ec4" style={{textDecoration:"none",margin:"20px",color:"black"}}>4</Link>
           <Link to="/ec/ec5" style={{textDecoration:"none",margin:"20px",color:"black"}}>5</Link>
           <Link to="/ec/ec6" style={{textDecoration:"none",margin:"20px",color:"black"}}>6</Link>
           </>
           :
           props=="Mechanical Engineering"   ?
           <>
           <Link to="/me/me1"style={{textDecoration:"none",margin:"20px",color:"black"}} >1</Link>
           <Link to="/me/me2" style={{textDecoration:"none",margin:"20px",color:"black"}}>2</Link>
           <Link to="/me/me3" style={{textDecoration:"none",margin:"20px",color:"black"}}>3</Link>
           <Link to="/me/me4" style={{textDecoration:"none",margin:"20px",color:"black"}}>4</Link>
           <Link to="/me/me5" style={{textDecoration:"none",margin:"20px",color:"black"}}>5</Link>
           <Link to="/me/me6" style={{textDecoration:"none",margin:"20px",color:"black"}}>6</Link>
           </>
           :
           props=="Civil Engineering"  ?
           <>
           <Link to="/cv/cv1"style={{textDecoration:"none",margin:"20px",color:"black"}} >1</Link>
           <Link to="/cv/cv2" style={{textDecoration:"none",margin:"20px",color:"black"}}>2</Link>
           <Link to="/cv/cv3" style={{textDecoration:"none",margin:"20px",color:"black"}}>3</Link>
           <Link to="/cv/cv4" style={{textDecoration:"none",margin:"20px",color:"black"}}>4</Link>
           <Link to="/cv/cv5" style={{textDecoration:"none",margin:"20px",color:"black"}}>5</Link>
           <Link to="/cv/cv6" style={{textDecoration:"none",margin:"20px",color:"black"}}>6</Link>
           </>
           :
           props=="First Year"  ?
           <>
           <Link to="/first/p"style={{textDecoration:"none",margin:"20px",color:"black"}} >1</Link>
           <Link to="/first/c" style={{textDecoration:"none",margin:"20px",color:"black"}}>2</Link>
          
           </>
           :
           <h1>hello</h1>
           
       }



    </Typography>
    <Files />
    </Box>
        
     
      </Box>
    
      {/* <img src={Image} minHeight="90vh" height="auto" width="100%" backgroundSize="cover" backgroundRepeat="no-repeat"/> */}
      
     
    </Box>
 
    

  </>
  )
}

 
