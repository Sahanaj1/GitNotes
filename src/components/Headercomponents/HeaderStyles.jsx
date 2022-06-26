import { makeStyles } from "@material-ui/core";
import Image1 from "../../Images/bg.png"
import { Theme } from '../Theme'
export const useStyles = makeStyles((theme)=>({
  HeaderWrapper:{
    width:"100%",
    minHeight:'90vh',
    // height:"200px",
   marginTop:"70px",
 
   backgroundColor:"white",
    // backgroundImage:`url(${Image1})`,
    // backgroundSize:"small",
    // backgroundRepeat:"no-repeat",
    color:Theme.colors.base2
   },
 
   HeaderContainer:{
       width:"85%",
    minHeight:'90vh',
    height:"auto",
    padding:"20px",
    display:"flex",
    // marginTop:"-100px",
    
    flexFlow:"column wrap",
    justifyContent:"left",
    fontFamily:"roboto"
   },
   headerTitle:{
       fontSize:"3rem",
       margin: theme.spacing(1, 0),
       [theme.breakpoints.down("xs")]: {
         fontSize: "2rem",
        
       },
   },
   headerT:{
     fontSize:"20px"
   },
//    headerBox:{
//      marginTop:"-520px",
// marginBottom:"-30px"
//    },
   headerDesc:{
       fontSize:"2rem",
       margin: theme.spacing(1, 0),
   [theme.breakpoints.down("xs")]: {
     fontSize: "1.5rem",
     margin: theme.spacing(2, 0),
     
   },
   },
    navbar:{
          backgroundColor:"white"
    },
    toolbar:{
        display:"flex",
        flexFlow:"row wrap",
        justifyContent:"space-between",
        color:"black"
    },
   
    navlinks:{
        
    },

    decorator: {
        display: "flex",
        fontWeight: "bolder",
        fontFamily: "roboto",
        position: "relative",
        marginTop: "20px",
        "&:before": {
          width: "40px",
          height: "40px",
          backgroundColor: Theme.colors.base3,
          content: '""',
          borderRadius: "50%",
        },
      },
      decoratorText: {
        lineHeight: "40px",
        position: " absolute",
        left: "20px",
        color:"white"
      },
    
      arrow: {
        lineHeight: " 35px",
        width:"60px",
        color:"white",
        position: " absolute",
        left: "95px",
        animationName: "upDown",
        animationDuration: "0.7s",
        animationIterationCount: "infinite",
      },
      "@global": {
        "@keyframes upDown": {
          "0%": {
            transform: "scale(1,1)",
            paddingTop: "0px",
          },
          "100%": {
            transform: "scale(1,2)",
            paddingTop: "10px",
          },
        },
      },
      // new:{
      //   padding:"10px"
      // },
    
      //drewer style
      drawer: {
        width: "250px",
        height: "100vh",
      },
      drawerContainer: {
        width: "250px",
        height: "100vh",
        backgroundColor: Theme.colors.base2,
      },
      listItem: {
        color: Theme.colors.base3,
      },
      // HeaderContainer1:{
      //   marginBottom:"70px",
      //     width:"85%",
      //  minHeight:'90vh',
      //  height:"auto",
      // marginTop:"150px",
      //  justifyContent:"center",
      //  fontFamily:"roboto",
     
      
      // },
      allFiles:{
        width:"100px",
        // marginLeft:"150px",
        minMargin:"20px"
      },
      posts:{
        flexFlow:"cloumn wrap",
      },
      // card:{
      //   gap:"3rem",
      //   overflow:"hidden",
      //   justifyContent:"space-between",
      //   cursor:"pointer",
      //   transition:"transform 200ms ease-in",
      //   boxShadow:"0 20px 20px gray", 
      //   display:"flex",
      // },
      // link:{
      //   textDecoration:"none",
      //   color:"black",
      //   fontSize:"20px"
      // },
      // img:{
      //   height:"200px",
      //   width:"200px" 
      // }, 
      // cardButton:{
      //   width:"60px",
      //   height:"40px",
      //    color:"black",
      //    backgroundColor:"grey",
      //    borderRadius:"8px"
      // },
      // desc:{
      //   fontSize:"20px",
      //   margin:"10px"
      // }
      buttonBox:{
        flexFlow:"column wrap",
        padding:"20px",
        minWidth:"10px"
      },
      buttonFile:{
        margin:"10px",
        minWidth:"10px"
      },
      buttonStyle:{
        padding:"10px",
        minWidth:"10px",
        maxWidth:"20px",
        border:"none",
        margin:"10px",
        backgroundColor:"white"
        
       
      },
      // imgNav:{
      //   maxWidth:"30px",
      //   maxHeight:"30px",
      //  width:"10px",
      //  height:"10px"
      // }
    }));
    

