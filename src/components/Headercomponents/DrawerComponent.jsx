import React from 'react'
import {Box, Drawer, ListItem,ListItemText,List,Button} from '@material-ui/core';
import { useStyles } from './HeaderStyles';
import {Link} from "react-scroll"




export default function DrawerComponent({initialState,navlinks,handleDrawerToggler}) {
    const classes=useStyles();
  return (
    <Drawer anchor="left" open={initialState} onClose={handleDrawerToggler} className={classes.drawer}>
        <Box className={classes.drawerContainer}>
    <List style={{ paddingTop: "30px" }}>
        {navlinks.map((item,i)=>(
            <Button key={1} className={classes.navlinks}
            to={`${item.Id}`}
                      activeClass='active'
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      component={Link}
                       > {item.label}
            <ListItem key={i} className={classes.listItem}>
            <ListItemText style={{color:"white"}} >
{item.label}
            </ListItemText>
        </ListItem>

        </Button>))}
        
    </List>
    </Box>
           </Drawer>
  )
}
