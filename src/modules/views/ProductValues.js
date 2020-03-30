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
    paddingTop: '5%',
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
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(1),    
    },
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
          <Typography variant="h4">
                DID YOU KNOW...
              </Typography>
              <Typography variant="h5" marginBottom="1%" className={classes.h5}>
                ...that founders spend way too much time fundraising?
              </Typography>
      </div>
      </Grid>
      <Grid item xs={12} sm={6}>
      <div className={classes.item}>
          <img
              src={InvestorList}
              alt="list"
              className={classes.image}
          />
          </div>
      </Grid>
      </Grid>
    </Container>
  
  );
}



ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
