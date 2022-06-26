import React,{useEffect, useState} from 'react'
import {Box, Typography,Drawer} from '@material-ui/core';
import { useStyles } from '../Headercomponents/HeaderStyles'
import Files from './Files'
import { notesData } from '../../data';
import { Link } from 'react-router-dom';
import NewNav from './NewNav';
import DrawerNew from './DrawerNew';
import AllFiles from './AllFiles';

export default function NoteComp({props,currentBranch}) {
  const classes=useStyles();
  const [initialState,setInitialState]=useState(false);
  const handleDrawerToggler=()=>{
    setInitialState(!initialState);
  };
// console.log(notesData[currentBranch],"curr")
   const currentBranchData = notesData[currentBranch];
   const [semSelected, setSemSelected] = useState();
   const [semData, setSemData] = useState({});
   const[allBranchData,setAllBranchData]=useState([])
   const sem = [3,4,5,6,7,8];
   const renderAllSems = [];
   const sub=[];
  //  sem.map(item => renderAllSems.push(<h1>{item}</h1>))

   useEffect(() => {
    if(semSelected)
      setSemData(currentBranchData['sem' + semSelected])
    else 
      setSemData(currentBranchData)
     
      

   }, [semSelected])
   
   useEffect(() => {
    if(semSelected){
      for(let key in semData)
      console.log(semData[key],"semData")

      // sub.push(semData[key])
      // sub.map(item=><h1>{item}</h1>)
      // console.log(sub);
      

      //  data= semData[key];
//  console.log(data,"data")
     }

   }, [semData])

   useEffect(()=>{
     if(!semSelected){
       const temp=[];
      //  console.log(currentBranchData, 'current branch data')
       for(let key in currentBranchData)
       temp.push(currentBranchData[key]);
      //  console.log(temp);
setAllBranchData(...temp)
      // console.log(currentBranchData[key],"curre branch data");
     }
   },[])

  useEffect(()=>{
    // console.log(allBranchData,"allbranch");
  },[allBranchData])
  return (
   <>
   
    <Box className={classes.HeaderWrapper} style={{alignItems:"center"}} id="Header">
   
       <NewNav handleDrawerToggler={handleDrawerToggler}/>
    <DrawerNew initialState={initialState} handleDrawerToggler={handleDrawerToggler}/>
    <Box style={{justifyContent:"center"}}>
    <Typography style={{color:"black",justifyContent:"center",marginBottom:"40px",marginTop:"80px",marginLeft:"30px"}} align="center" variant="h4">{props}</Typography>
    <Typography style={{color:"black",justifyContent:"center",marginBottom:"80px",marginLeft:"30px"}} align="center" variant="body">
       <button className={classes.buttonStyle} onClick={()=> setSemSelected(undefined)}> All </button>
       
      { sem.map(item => <button className={classes.buttonStyle} onClick={() => setSemSelected(item)}> {item} </button>) }
      {  semSelected ? <> <Files notes={semData}/> </> : <div style={{marginLeft:"430px"}}>
        <AllFiles setSemSelected={setSemSelected} first={"First Year"} branch={currentBranch} notes={currentBranchData}/></div> }
    </Typography>
    </Box>
    </Box>
  </>
  )
}

 
