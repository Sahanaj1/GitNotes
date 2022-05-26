import React,{useState} from 'react'
import {Box, Typography,Drawer} from '@material-ui/core';
import { useStyles } from '../Headercomponents/HeaderStyles'
import Files from './Files'
import { posts } from '../../data';
import { Link } from 'react-router-dom';
import NewNav from './NewNav';
import DrawerNew from './DrawerNew';
import MeFiles from './MeFiles'

export default function MeNotes({props,posts}) {
  const classes=useStyles();
  const [initialState,setInitialState]=useState(false);
  const handleDrawerToggler=()=>{
    setInitialState(!initialState);
  };


const links=[
    {
        id:1,
        link:'/me/me1',
        props:"First Sem ME"
    },
    {
        id:2,
        link:'/me/me2',
        props:"Second Sem ME"
    },
    {
        id:3,
        link:'/me/me3',
        props:"Third Sem ME"
    },
    {
        id:4,
        link:'/me/me4',
        props:"Fourth Sem ME"
    },
    {
        id:5,
        link:'/me/me5',
        props:"Fifth Sem ME"
    },
    {
        id:6,
        link:'/me/me6',
        props:"Sixth Sem ME"
    },
]
// console.log(posts)
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
    {/* {posts.map(item=>(<MeFiles props={item.branch} sem={item.sem} />))} */}
{/* {posts.map(post=>(
  post.sem=="First Sem ME" ?
  <Files props={"First Sem ME"} sem={"1"} posts={posts}/>
  :
  <h1>hello</h1>
))} */}
    {/* <MeFiles props={"First Sem ME"} sem={"1"}/> */}
    {/* <Files props={"Second Sem ME"} sem={"2"}/>
    <Files props={"Third Sem ME"} sem={"3"}/>
    <Files props={"Fourth Sem ME"} sem={"4"}/>
    <Files props={"Fifth Sem ME"} sem={"5"}/> */}
 <MeFiles/>
    </Box>
        
     
      </Box>
    
      {/* <img src={Image} minHeight="90vh" height="auto" width="100%" backgroundSize="cover" backgroundRepeat="no-repeat"/> */}
      
     
    </Box>
 
    
  </>
  )
}

 
