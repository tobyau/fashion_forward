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
  const classes = useStyles();
  
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // var path = window.location.pathname;
  
  var cards = (path) => {
    for(let x = 0; x < 9; x++) {
      return(<img src={require(`../imgs${path}/1.png`)} alt="" className="card-image"/>);
    }
  };
    
  return(
    <div>
      <div className="card" onClick={handleOpen}> 
        {cards}
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