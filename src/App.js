import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './App.css';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
    <div className="App">
      <Button variant="contained" className={classes.button}>
        Default
      </Button>
    </div>

<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://www.forever21.com/images/f21/us/en/web/20191004/0923_WGA_NightCollection_D_M.gif?1" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://www.forever21.com/images/f21/us/en/web/20191004/0923_WGA_UrbanYouth_D_M.gif?1" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://www.forever21.com/images/f21/us/en/web/20191005/0923_WGA_SoftStructured_D_M.jpg?1" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

</React.Fragment>
  );
}

export default App;
