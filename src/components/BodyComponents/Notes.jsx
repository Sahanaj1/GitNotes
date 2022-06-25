import React, { useState } from 'react'
import { useStyles } from './BodyStyles';
import { Grid,Box,Container, Typography, Button } from '@material-ui/core';
import { RenderSectionHeading } from '../common/commonComp';
import img2 from '../../Images/img2.png'
import img3 from '../../Images/img3.png'
import img1 from '../../Images/img1.png'
import img4 from '../../Images/img4.png'
import img5 from '../../Images/img5.png'
import img6 from '../../Images/img6.png'
import { Link } from 'react-router-dom';
import ScrollAnimation from "react-animate-on-scroll"

export default function Notes() {
    const classes=useStyles();
   
    const projectData=[
        {
            id:1,
            url:img1,
            title:"Computer Science",
            link:'/cs'
        },
        {
            url:img2,
            title:"Electronics and Communication",
            link:'/ec'
        },
        {
            url:img3,
            title:"Mechanical Engineering",
            link:'/me'
        },
        {
            url:img4,
            title:"Civil Engineering",
            link:'/cv'
        },
        {
            url:img5,
            title:"Information science",
            link:'/is'
        },
        {
            url:img6,
            title:"First Year",
            link:'/first'
        },
    ]
    console.log("clicked")

    return(
<>
   

           <Box className={classes.sectionDark} id="notes"  >
             <Grid container style={{display:"flex",
            justifyContent:"center",
            alignContent:"center"}}>
                 <Grid item xs={12} sm={8}>
                     {RenderSectionHeading({smallText:"Projects", heading: "Departments", alignCenter: true })}
                 </Grid>
             </Grid>
            
             <Container maxWidth="1200px" minWidth="30px"  className={classes.container}>
                 <Grid container spacing={2} maxWidth="sm" minWidth="xs" >
                     {projectData.map((item,i)=><Grid item xs={6} sm={6}lg={4} key={i}>
                     <Box className={classes.imageContainer}  variant='link' href={item.link}    >
                     <Link to={item.link} style={{textDecoration:"none"}}>  <img src={item.url} alt={item.title} className={classes.responsiveImg} variant='link' href={item.link}/>   </Link>
                            <Typography key={item.id}>{item.title}</Typography>
                     </Box>
                 </Grid> )}
                 
             </Grid>
             </Container>
            
           </Box>
           
           </>
  )
}

{/* <Button key={item.id} className={classes.visit}>{item.title}</Button> */}

