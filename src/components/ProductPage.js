import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Ratings from './Ratings';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const Cards = (props) => {
  var card = [];
  for(let x = 1; x <= 9; x++) {
    card.push(<img src={require(`../imgs${props.props.path}/${x}.png`)} alt="" className="card-image" key={x}/>)
  }
  return(
    <div>
      {card}
    </div>
  );
};

const CardModal = (path) => {
  
  const classes = useStyles();
  
  const [open, setOpen] = React.useState(false);
  const [image_number, setNumber] = React.useState(1);
  

  const handleOpen = (e) => {
    setOpen(true);
    // console.log(e.target);
    // console.log(Object.entries(e.target));
    // var count = 0;
    var values_array = Object.values(e.target);
    var image_tag = values_array[1].src;
    // console.log(image_tag[14]);
    // image_number['number']= image_tag[14];
    // console.log(image_number.number);
    // console.log(image_tag);
    setNumber(image_tag[14]);
  };
 
  const handleClose = () => {
    setOpen(false);
  };
  
  
  
  return(
    <div className="card-container">
      <div onClick={handleOpen}> 
        <Cards props={path}/>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
            <div className="container">
              <div className="row">
                <div className="col">
                  <img src={require(`../imgs${path.path}/${image_number}.png`)} alt="" />
                </div>
                <div className="col product-info">
                  <h1 id="transition-modal-title">Product Name</h1>
                  <Ratings />
                  <h3>Price: $79.99</h3>
                  <div className="sizes-button-container">
                    <button type="button" className="btn btn-outline-dark">XS</button>
                    <button type="button" className="btn btn-outline-dark">S</button>
                    <button type="button" className="btn btn-outline-dark">M</button>
                    <button type="button" className="btn btn-outline-dark">L</button>
                    <button type="button" className="btn btn-outline-dark">XL</button>
                  </div>
                  <div className="product-description">"Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque vel mi ut
                  velit tempor aliquam eget eget enim. Proin cursus eleifend pretium. Aliquam cursus 
                  pellentesque interdum. Vivamus placerat id leo a pellentesque. Vivamus a congue urna,
                  sed porta eros. Etiam finibus magna et est aliquam, sed semper libero facilisis. "</div>
                  <a href="/checkout"><Button variant="contained" color="default" id="add-cart-icon">
                    Add to Bag
                    <i  className="fas fa-shopping-bag fa-sm bag-icon"></i>
                  </Button></a>
                </div>
              </div>
            </div>
        </Fade>
      </Modal>
    </div>
  );
}

class ProductPage extends Component {
  render() {
    return(
      <div className="product-page-container">
        <CardModal path={window.location.pathname}/>
      </div>
    );
  }
}

export default ProductPage; 