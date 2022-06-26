import { ClassNames } from "@emotion/react";
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography,Button,CardActions,Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { posts } from "../../data";
import { useEffect, useState } from "react";
import { useStyles } from "../Headercomponents/HeaderStyles";
const Files = ({ notes}) => {
const [data,setData]=useState([]);
    const classes=useStyles()
    let dataNew;
    const [subjectData, setSubjectData] = useState([])

// console.log(notes,"notes");
    useEffect(()=>{
      
        // for(let key in notes)
        // setData(notes[key])
        // console.log(notes,"notes[key]")
      //   dataNew=notes[key];
      //   setData(dataNew)
     
      // console.log(dataNew,"files")
      const sub = [];
      for(let key in notes){
        sub.push(notes[key])
        // console.log(notes[key]);
      }
      setSubjectData(sub)
      console.log(sub, 'in array form');

    //  sub.map(item=>console.log(item.subjectName,item.subjectCode,"item map"))
      // notes.map(item=>console.log(item,"notes map"))
     
    },[notes])

    useEffect(()=>{
// console.log(subjectData,"subject data console")
subjectData.map(item=>{console.log(item.subjectName,item.subjectCode,"mapitem")})
    },[setSubjectData])
    
const user=true;
  return (
    <Grid container spacing={4} style={{justifyContent:"center",marginTop:"40px" }} sm={8} md={12}>
     
{subjectData.map(item=>(
   <Grid  style={{marginLeft:"50px",align:"center"}} xs={6} sm={5} md={5} >
   <Card sx={{ maxWidth: 345 }} style={{marginBottom:"30px"}}> 
      
        <CardContent style={{marginBottom:"30px",align:"center"}}>
          <Typography gutterBottom variant="h5" component="div">
         {item.subjectName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {item.subjectCode}
          </Typography>


          <Box className={classes.buttonBox}>
            {user ?<>
                <Button size="small" className={classes.buttonFile} href={item.mod1link}>
                {item.mod1}
                 </Button>
                 <Button size="small" className={classes.buttonFile} href={item.mod2link} >
                 {item.mod2}
                 
                 
                 </Button>
                 <Button size="small" className={classes.buttonFile} href={item.mod3link}>
                 
                 {item.mod3}
                 
                 </Button>
                 <Button size="small" className={classes.buttonFile} href={item.mod4link}>
                 
                 {item.mod4}
                 
                 </Button>
                 <Button size="small" className={classes.buttonFile} href={item.mod5link}>
                 
                 {item.mod5}
                 
                 </Button>
                 </>
                 :<h1>hello</h1>
            }
        
          </Box>
        </CardContent>
        <CardActions>
         
      
        </CardActions>
      </Card>
            </Grid>
))

}
     

       

 
 </Grid>

  );
};

export default Files;








// {subjectData.map((item, key)=> {
//   return (
// <div className="card">
//   <img src="" alt="" className="card__img" />
//   <div className="card__body">
//     <h2 className="card__title"></h2>
//     <p className="card__description"></p>
//     <button className="card__btn"></button>
//   </div>
// </div>
//   )