import { Box,IconButton, Typography,Button} from '@material-ui/core'
import React from 'react'
import { useStyles } from './BodyStyles'
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward"
import FavoriteIcon from "@material-ui/icons/Favorite";
import {Link} from "react-scroll";
export default function Footer() {
    const classes=useStyles();
    var date=new Date();
  return (
      <Box className={classes.footerContainer} id="Footer">
<IconButton className={classes.iconButton}
style={{position:"absolute", backgroundColor:"#2e4a9e",color:"#fff"}}
to="Header"
activeClass='active'
spy={true}
smooth={true}
offset={-70}
duration={1200}
component={Link}
>
    <ArrowUpwardIcon/>
</IconButton>
<Box className={classes.icons}>
   </Box>
  <Typography variant='body1' component='h4'align="center" style={{color:"grey"}} >
  © GitNotes. All rigths reserved @{date.getFullYear()}
</Typography>
      </Box>
  )
}
