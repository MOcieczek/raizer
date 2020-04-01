import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import Friend from '../../assets/friend.png';


const Emoji = props => (
  <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
     >
      {props.symbol}
  </span>
);

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: "#ffffff",
    paddingTop: theme.spacing(8),
    paddingBottom: '5%',
  
  },
  container: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
  },
  image: {
    width: '70%',
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },

  h5: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(2),    
    
  },

});


function ProductValues(props) {
  const { classes } = props;

  return (
    <Container className={classes.root}>
      <Grid container 
        className={classes.container}
        spacing={3}
        direction="row"
        alignItems="center"
        >
      <Grid item xs={12} sm={6}>
      <div className={classes.item}>
          <img
              src={Friend}
              alt="list"
              className={classes.image}
          />
          </div>
      </Grid>
      
      <Grid item xs={12} sm={6}>
      <div className={classes.item}>
          <Typography variant="h4">
              EFFORTLESS FUNDRAISING
              </Typography>
              <Typography variant="h5" className={classes.h5}>
              <Emoji symbol="🔍" label="maginifier"/> Discover relevant investors<br></br>
              <Emoji symbol="✅" label="maginifier"/> Filter on ticket size, location, focus etc<br></br>
              <Emoji symbol="💜" label="maginifier"/> Build your own list with favorites<br></br>
              <Emoji symbol="🤓" label="maginifier"/> Assign owner<br></br>
              <Emoji symbol="👯‍♀️" label="maginifier"/> Collaborate with co-founders<br></br>
              <Emoji symbol="🚦" label="maginifier"/> Set status<br></br>
              <Emoji symbol="🖍" label="maginifier"/> Add notes<br></br>
              <Emoji symbol="📊" label="maginifier"/> Share documents in data room <br></br>

              </Typography>
      </div>
      </Grid>
      
      </Grid>
      <br></br>
      <br></br>
    </Container>
  
  );
}



ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
