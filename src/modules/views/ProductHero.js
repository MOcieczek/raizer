import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import Background from '../../assets/background.png';



const styles = theme => ({
  background: {
    backgroundImage:{Background},
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 150,
    
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    maxWidth: "60%",
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(1),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      
      <Typography color="inherit" align="center" variant="h2" marked="center">
        FUNDRAISING RE-INVENTED
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Raizer helps you find relevant investors, and brings structure and efficiency to your fundraising. 
      </Typography>
      <Button
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        target="_blank"
        href="https://raizerwaitlist.typeform.com/to/pBcsAG"
      >
        Waitlist
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Sign up to our waitlist, and be the first one to try Raizer when we launch! 
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
