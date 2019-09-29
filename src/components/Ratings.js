import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  rating1: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});

function Ratings() {
  // const [value, setValue] = React.useState(2);
  const classes = useStyles();
  return(
    <div className="ratings-container">
      <Box component="fieldset" mb={3} borderColor="transparent">
        <div className={classes.rating1}>
          <Rating
            name="hover-side"
            value={5}
            precision={0.5}
          />
        </div>
      </Box>
    </div>
  );
}

export default Ratings;