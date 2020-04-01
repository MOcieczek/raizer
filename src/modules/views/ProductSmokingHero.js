import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import Friend from '../../assets/friend.png';
import Divider from '@material-ui/core/Divider';


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


function ProductSmokingHero(props) {
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
          <Typography variant="h4">
          FOUNDER FRIENDLY FUNDRAISING
              </Typography>
              <Typography variant="h5" className={classes.h5}>
                Founders spend too much time fundraising. Looking for, researching and managing investors is no-ones favorite part of the job. Raizer is here to help with some simple tools.
              </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.item}>
          <img
              src={Friend}
              alt="list"
              className={classes.image}
          />
          
          </div>
        </Grid>
      </Grid>
    </Container>
    
  );
}



ProductSmokingHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductSmokingHero);
