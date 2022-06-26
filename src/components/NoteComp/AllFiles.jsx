import { ClassNames } from "@emotion/react";
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography,Button,CardActions } from "@material-ui/core";
import { Link } from "react-router-dom";
import { posts } from "../../data";
import { useEffect, useState } from "react";
import "../Headercomponents/new.css"
import { useStyles } from "../Headercomponents/HeaderStyles";
const AllFiles = ({ setSemSelected,notes,first,branch}) => {
const [data,setData]=useState([]);
    const classes=useStyles()
    let dataNew;
    const [subjectData, setSubjectData] = useState([])


useEffect(()=>{
    const data=[];
   for(let key in notes)
   data.push(notes[key])
   setSubjectData(data)
//    console.log(data,"useff data");
},[notes])


useEffect(()=>{
    // console.log(subjectData,"subject  data")
},[subjectData])



  return (

    // <Grid container spacing={4} style={{justifyContent:"center",width:"90%",backgroundColor:"black",marginTop:"40px"}} sm={8} md={12}>
     <div>

    
{subjectData.map((item, key)=> {
//   return (<Grid  style={{margin:"10px",marginRight:"100px",align:"center",width:"30px",marginLeft:"50px"}} xs={6} sm={5} md={5} >
//  <Card sx={{ maxWidth: 345 }} style={{marginBottom:"30px",width:"250px",}}> 
   
//       <CardContent style={{marginBottom:"30px",align:"center"}}>
         
//         <Typography gutterBottom variant="h5" component="div">
//    {console.log(item)}
//      <Button size="medium" onClick={()=>setSemSelected(key+3)}>
//      <Typography gutterBottom variant="h5" component="div">
//      {branch} semester {key+3} 
//      {/* {item} */}
//          </Typography>
//         </Button>
//         </Typography>
       
//       </CardContent>
//       <CardActions>


//       </CardActions>
//     </Card>
//           </Grid>

return (
  <div className="container">
 <div className="card">
    <img src="" alt="" className="card__img" />
    <div className="card__body">
      <h2 className="card__title"> {branch} semester{key+3}</h2>
      <p className="card__description"></p>
      <button className="card__btn" onClick={()=>setSemSelected(key+3)} >click</button>
    </div>
  </div>
  </div>
 
    )
          
          
          
          
          
          
})}



     

       

 
{/* //  </Grid> */}

</div>  

// {subjectData.map((item, key)=> {
//   return (
// <div className="card">
//   <img src="" alt="" className="card__img" />
//   <div className="card__body">
//     <h2 className="card__title"></h2>
//     <p className="card__description">{branch} semester{key+3}</p>
//     <button className="card__btn" ></button>
//   </div>
// </div>
//   )








  );
};

export default AllFiles;



