import {Box, Typography} from '@material-ui/core';
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
import { useStyles } from '../Headercomponents/HeaderStyles';
import { useStyles as BodyStyles } from '../BodyComponents/BodyStyles';




export const Divider=({style})=>{
    const classes=BodyStyles();

    return( <Typography className={classes.divider} style={style}></Typography>)
}

export const RenderSectionHeading=({smallText,heading,alignCenter,description})=>{
    const classes=BodyStyles();
return (<Box className={classes.sectionHeadingCont}>
 
    <Typography variant="h4"  align={alignCenter ? "center": "left" }className={classes.sectionHeading}>{heading}</Typography>
   {Divider({style:alignCenter ? {margin:"16px auto"}: {margin:"16px 0px"}})}
    <Typography variant="body1" component='h6' className={classes.desc}>{description}</Typography>
    </Box>)
};