import { ClassNames } from "@emotion/react";
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography,Button,CardActions } from "@material-ui/core";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { posts } from "../../data";
import { useStyles } from "../Headercomponents/HeaderStyles";
const MeFiles = ({ props,sem}) => {
//   function data(posts){
//     return posts.filter((post)=>post.branch=="cs")
//   }
//   data()
    const classes=useStyles()
    useEffect(() => {
      const needData = posts.filter((post) => post.branch == props)
      console.log(needData, 'shri', sem)
    },[])
   
  return (
    <Grid container spacing={4} style={{justifyContent:"center",marginTop:"40px" }} sm={8} md={12}>
     
{posts.filter((post)=>post.branch==props && post.sem==sem )
        .map((post)=>(
<Grid key={post} style={{marginLeft:"70px",align:"center"}} xs={6} sm={5} md={5} >
 <Card sx={{ maxWidth: 345 }} style={{marginBottom:"30px"}}> 
    {console.log(post)}
      <CardContent style={{marginBottom:"30px",align:"center"}}>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {post.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          {/* <a href="https://drive.google.com/file/d/1PTzgkN7cuq1wgsL6e6YV7frzvqmoC1wx/view?usp=sharing">Click</a> */}Download
        </Button>
    
      </CardActions>
    </Card>
          </Grid>
      ))}

        </Grid>

  );
};

export default MeFiles;



