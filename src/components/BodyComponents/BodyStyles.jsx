import { makeStyles } from "@material-ui/core";
import { Theme } from "../Theme";

export const useStyles = makeStyles((theme)=>({
  
    section:{
        backgroundColor:Theme.colors.base2,
        padding:theme.spacing(10,0,8,0),
        
    },
    sectionDark:{
        backgroundColor:Theme.colors.base2,
        maxWidth:"1280px",
        minWidth:"300px",
        marginTop:"50px"
    },
    divider:{
        width:"65px",
        height:"4px",
        backgroundColor:Theme.colors.base1,
        
    },
    responsiveImg:{
        width:"100%",
        display: "flex",
        height:"auto",
    },
    sectionHeadingCont:{
        fontSize:"large",
        padding:theme.spacing(1),
         color:Theme.colors.base1,
    },
    sectionHeading:{
        color:Theme.colors.base1,
        margin:theme.spacing(1,0),
    },
    desc:{
      color:Theme.colors.base1,  
    },
    AvatarCont: {
        display: "flex",
        flexFlow: "row",
        justifyContent: "center",
        alignItems: "center",
      },
      avatar: {
        backgroundColor: Theme.colors.base3,
        color: Theme.colors.base2,
      },
      MediaText: {
        color: Theme.colors.base2,
      },
    
      // # portfolio section
      container:{
        maxWidth:"100%",
        minWidth:"10px",
       width:"100%"
      },

      imageContainer: {
        position: "relative",
        "&:hover $imageOverlay": {
          opacity: 1,
        },
      },
      imageOverlay: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        backgroundColor:"blur" ,
        color: Theme.colors.base2,
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center",
        alignItems: "center",
        opacity: 0,
        transition: "0.7s",
      },
      overlayTitle: {
        fontSize: "2rem",
        marginBottom: "500px",
        [theme.breakpoints.down("xs")]: {
          fontSize: "1.2rem",
        },
      },
    
      //form com=ntainer
      formContainer: {
        padding: theme.spacing(2),
        margin: theme.spacing(2, 0),
      },
    
      submitBtn: {
        backgroundColor: Theme.colors.base3,
    color:Theme.colors.base2,
        "&:hover": {
          backgroundColor: Theme.colors.primary1,
        },
      },
    
      // footer stylr
      footerContainer: {
       
        backgroundColor: Theme.colors.base2,
        color: Theme.colors.base1,
        padding: theme.spacing(2),
        position: "relative",
      

      },
      iconButton: {
        position: "absolute",
        right: 5,
        top: -25,
        backgroundColor: Theme.colors.base3,
        color: Theme.colors.base2,
      },
      drawer:{
          width:'250px',
          heightL:"100vh",

      },
      drawerContainer:{
        width:'250px',
        heightL:"100vh",
        backgroundColor:Theme.colors.base2,
      },
      icons:{
        width: '100%',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  
      },
      iconColor:{
        color:Theme.colors.base2
      },
      skill:{
        position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  color:Theme.colors.base2
      },
      skill1:{
        position: 'left',
  justifyContent: 'left',
  alignItems: 'center',
  display: 'flex',
  color:Theme.colors.base2
      },
      contact:{
        position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  paddingTop:"auto",
  paddingBottom:"auto"
  
      },
      visit:{
        color:"black",
        backgroundColor:"white"
      }
}))