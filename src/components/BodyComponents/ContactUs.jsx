import { Box,Grid,Container,Button } from '@material-ui/core'
import React,{useState} from 'react'
import { useStyles } from './BodyStyles';

import { RenderSectionHeading } from '../common/commonComp';

import { RenderInputText } from '../common/FormComponent';




export default function ContactUs() {
    const classes=useStyles();
    const [state, setState] = useState({
        data: {
          firstname: "",
          email: "",
          messages: "",
        },
        errors: {},
      });

      const handleOnChange=({target})=>{
          const {data,errors}=state;
          target.value.length <= 3
      ? (errors[target.name] = `${target.name} at least have 3 letters`)
      : (errors[target.name] = "");

    data[target.name] = target.value;
    setState({ data, errors });
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted ,", state.data);
        //api call to psot data
      };
  return (
    <Box className={classes.section} id="Contact">
      
        <Container>

<Grid container  spacing={1} style={{display:"flex",
            justifyContent:"center",
            alignContent:"center",textAlign:"center"}} >

<Grid item xs={12} sm={7}>
<Grid container  className={classes.contact}>
    {RenderSectionHeading({smallText:"Contact", heading:"Contact Us!", description:"",alignCenter:true})}
    <br/>
    </Grid> 
<form onSubmit={handleSubmit}>
    <Grid container
                  direction='row'
                  justify='center'
                  alignItems='center'>
        <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
        {RenderInputText({
                      label: "First Name",
                      name: "firstname",
                      state: state,
                      onChange: handleOnChange,
                    })}
        </Grid>
        <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                    {RenderInputText({
                      label: "Email",
                      name: "email",
                      state: state,
                      onChange: handleOnChange,
                    })}
                  </Grid>
                  <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                    {RenderInputText({
                      label: "Messages",
                      name: "messages",
                      state: state,
                      onChange: handleOnChange,
                      multiline: true,
                      rows: 5,
                    })}
                  </Grid>
                  <Grid item xs={12} sm={8} style={{ marginBottom: "16px" }}>
                    <Button
                      variant='outlined'
                      type='submit'
                      fullWidth={true}
                      className={classes.submitBtn} style={{backgroundColor:"#2e4a9e"}}>
                      Submit
                    </Button>
                  </Grid>

    </Grid>
</form>
</Grid>
</Grid>
</Container>

</Box>
  )
};


