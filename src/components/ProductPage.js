import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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
}));

const CardModal = (path) => {
  
  var image_number = {}
  
  const classes = useStyles();
  
  const [open, setOpen] = React.useState(false);

  const handleOpen = (e) => {
    setOpen(true);
    // console.log(e.target);
    // console.log(Object.entries(e.target));
    // var count = 0;
    var values_array = Object.values(e.target);
    var image_tag = values_array[1].src;
    // console.log(image_tag[14]);
    image_number['number']= image_tag[14];
    
  };
 
  const handleClose = () => {
    setOpen(false);
  };
  
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
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Product information</h2>
            <p id="transition-modal-description">react-transiton-group animates me.</p>
            <h2>{image_number.number}</h2>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

class ProductPage extends Component {
  render() {
    return(
      <div>
        <CardModal path={window.location.pathname}/>
      </div>
    );
  }
}

export default ProductPage; 