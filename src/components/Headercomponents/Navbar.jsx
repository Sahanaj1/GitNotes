import React from 'react'
import { AppBar,Typography,Toolbar, IconButton } from '@material-ui/core'
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useStyles } from './HeaderStyles';
import { Hidden } from '@material-ui/core';
import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";
import {Link} from "react-scroll";


export default function Navbar({navlinks,handleDrawerToggler}) {
    const classes=useStyles()
  return (
    <AppBar position="fixed" className={classes.navbar} style={{backgroundColor:"white"}} >
    <Toolbar className={classes.toolbar} color="blue">
     
      <Typography variant="h5"  to="https://github.com/Sahanaj1"
      style={{ padding:"5px", margin:"5px",color:"black"}} >
        GITnotes
      </Typography>

{/* <Link to="/https://github.com/Sahanaj1" className={classes.link}>
              Home
            </Link> */}
      <Box component={Hidden} xsDown>
        <Box className={classes.new}>
      {navlinks.map((item,i)=><Button key={1} className={classes.navlinks}
      to={`${item.Id}`}
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                component={Link}
                color='white' > {item.label}</Button>)}
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
