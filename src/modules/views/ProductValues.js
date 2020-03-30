import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import LocalAtmOutlined from '@material-ui/icons/LocalAtmOutlined';
import FavoriteBorderOutlined from '@material-ui/icons/FavoriteBorderOutlined';
import DescriptionOutlined from '@material-ui/icons/DescriptionOutlined';



const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: "#574EFF",
    
  },
  container: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(10),
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  headline: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(10), 
    color: "#ffffff",
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
              <Typography variant="h4" className={classes.headline}>
                WHY RAIZER
              </Typography>
    
      </Container> 
    </section>
  );
}



ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
