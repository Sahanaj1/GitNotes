import { makeStyles, TextField } from "@material-ui/core";
import { Theme } from "../Theme";

const useStyles = makeStyles((theme) => ({
    cssLabel: {
      color: "grey",
      "&.Mui-focused": {
        color: Theme.colors.base3,
      },
    },
    //input props root
    cssOutlinedInput: {
      "&:not(hover):not($disabled):not($cssFocused):not($error) $notchedOutline":
        {
          borderColor: "blue", //default
          opacity: 0.5,
        },
      "&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline": {
        opacity: 1,
        borderColor: Theme.colors.base3, //hovered #DCDCDC
      },
      "&$cssFocused $notchedOutline": {
        borderColor: Theme.colors.base3, //focused
        color: Theme.colors.base3,
      },
    },
    notchedOutline: {},
    cssFocused: {},
    error: {},
    disabled: {},
  }));
  




export const RenderInputText = ({
    name,
    label,
    state,
    onChange,
    multiline,
    rows,
  }) => {
    const { data, errors } = state;
    const classes = useStyles();
    return (
      <TextField
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused,
          },
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
          },
        }}
        variant='outlined'
        label={label}
        fullWidth={true}
        name={name}
        value={data[name]}
        error={errors[name] ? true : false}
        helperText={errors[name]}
        onChange={onChange}
        multiline={multiline}
        rows={rows}
      />
    );
  };