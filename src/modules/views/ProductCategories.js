import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '../components/Button';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = theme => ({
  root: {
    //marginTop: theme.spacing(8),//
    //marginBottom: theme.spacing(4),//
    backgroundColor:"blue",
  },
 
  
  buttonContainer: {
    marginBottom: "5%",
    display: 'flex',
    flex: 1,
    justifyContent: "center"

  }
});

function ProductCategories(props) {
  const { classes } = props;

  

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        The tool for fundraising founders
      </Typography>
      <div className={classes.buttonContainer}>      
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
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
