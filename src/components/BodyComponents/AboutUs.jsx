import { Box,Grid,Hidden,Container } from '@material-ui/core'
import React from 'react'
import { useStyles } from './BodyStyles';
import { RenderSectionHeading } from '../common/commonComp';


export default function AboutUs() {
    const classes=useStyles();
  return (
    <Box className={classes.sectionDark} id="About">
    <Grid container style={{display:"flex",
                justifyContent:"center",
                alignContent:"center"}} >
    <Grid iem xs={12} sm={8}  container style={{display:"flex",
                justifyContent:"center",
                alignContent:"center"}}  >
    {RenderSectionHeading({
        heading:"About Us",
        description:"We're dedicated to giving you the very best of our service, with a focus on dependability, customer service, and best quality notes.We hope you enjoy our service as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us",
       alignCenter:true
    })}
    </Grid>
    </Grid>
    
        </Box>
  )
};


