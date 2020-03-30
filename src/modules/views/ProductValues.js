import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import InvestorList from '../../assets/investorList.png';



const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: "#574EFF",
    
  },
  container: {
    marginTop: '2%',
    marginBottom: theme.spacing(10),
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    color: "#ffffff",
  },
  
  headline: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(10), 
    color: "#ffffff",
  },
  titles: {
    color: "#ffffff",
  },
});


function ProductValues(props) {
  const { classes } = props;

  return (
    <Container className={classes.root} component="section">
      <Grid container>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
            <form className={classes.cardContent}>
              <Typography variant="h3" component="h2" gutterBottom>
                Hey founders!
              </Typography>
              <Typography variant="h5">
                Sign up to our waitlist, and you'll be fundraising like a super star before you know it.
              </Typography>
              <br></br>
            </form>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imagesWrapper}>
          
            <div className={classes.imageDots} />
            <img
              src={InvestorList}
              alt="list"
              className={classes.image}
            />
          
        </Grid>
      </Grid>
 
    </Container>
  
  );
}



ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
