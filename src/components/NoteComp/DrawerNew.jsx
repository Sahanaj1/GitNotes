import React from 'react'
import {Box, Drawer, ListItem,ListItemText,List,Button} from '@material-ui/core';
import { useStyles } from '../Headercomponents/HeaderStyles'
import {Link} from "react-scroll"

import {Link as Nav} from "react-router-dom"


export default function DrawerNew({initialState,handleDrawerToggler}) {
    const classes=useStyles();
  return (
    <Drawer anchor="left" open={initialState} onClose={handleDrawerToggler} className={classes.drawer}>
        <Box className={classes.drawerContainer}>
        <List style={{ paddingTop: "30px" }}>
        
            <Button  className={classes.navlinks}
                      activeClass='active'
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                     
                       ><Nav to="/head"></Nav>
            <ListItem  className={classes.listItem}>
            <ListItemText style={{color:"white"}} >
            <Nav to="/head" style={{textDecoration:"none",color:"black",marginRight:"20px"}} >Back</Nav>
            </ListItemText>
        </ListItem>

        </Button>
        
    </List>
    </Box>
           </Drawer>
  )
}
