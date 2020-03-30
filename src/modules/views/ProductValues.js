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
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: "#ffffff",
    
    
  },
  container: {
    marginTop: '10%',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    color: "#ffffff",
    flexDirection: 'column',
    justifyContent: 'center',  
    position: 'relative',
  },


  h5: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(1),    
    },
  },
  grid: {
    
  },

});


function ProductValues(props) {
  const { classes } = props;

  return (
    <Container className={classes.root} component="section">
      <Grid container
        direction="row"
        alignItems="center"
        >
              <Typography variant="h3">
                DID YOU KNOW...
              </Typography>
              <Typography variant="h5" className={classes.h5}>
                ...that founders spend way too much time fundraising?
              </Typography>
       
      </Grid>
      <Grid item xs={12} md={6}>
          <img
              src={InvestorList}
              alt="list"
              className={classes.image}
          />
      </Grid>
    </Container>
  
  );
}



ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
