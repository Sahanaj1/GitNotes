import { useLocation } from "react-router";
import { posts } from '../../data'
import { useStyles } from "../Headercomponents/HeaderStyles";
const Pdf = () => {
    const classes=useStyles()
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const post = posts.find((p) => p.id.toString() === path);

  console.log(location);
  return (
    <div >
      <img src={post.img} alt="" className={classes.post1}/>
      <h1 className={classes.post1}>{post.title}</h1>
      <p className="postDesc">{post.desc}</p>
      <p className="postLongDesc">{post.longDesc}</p>
    </div>
  );
};

export default Post;