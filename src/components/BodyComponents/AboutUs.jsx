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
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
       alignCenter:true
    })}
    </Grid>
    </Grid>
    
        </Box>
  )
};


