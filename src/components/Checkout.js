import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import '../App.css';

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));
;

export default function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form  className={classes.container} noValidate autoComplete="off">
      <h2> Checkout </h2>
      <TextField
        id="standard-with-placeholder"
        label="First Name"
        placeholder="First Name"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-with-placeholder"
        label="Last Name"
        placeholder="Last Name"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-with-placeholder"
        label="Address"
        placeholder="Address"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-with-placeholder"
        label="Apartment No."
        placeholder="Apartment No."
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-with-placeholder"
        label="Zipcode"
        placeholder="Zipcode"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-with-placeholder"
        label="Phone Number"
        placeholder="Phone Number"
        className={classes.textField}
        margin="normal"
      />

      <h4>Payment Via Paypal</h4>
      <TextField
        id="standard-with-placeholder"
        label="Email Address"
        placeholder="Email Address"
        className={classes.textField}
        margin="normal"
      />
      
    </form>
  );
}
