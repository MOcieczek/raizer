import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Background from '../../assets/background.png';




const styles = theme => ({
  root: {
    color: theme.palette.common.black,
    position: 'relative',
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      height: '70vh',
      minHeight: 600,
    },
  },
  container: {
    marginBottom: theme.spacing(10),
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'inherit',
    justifyContent: 'center',

  },
  backdrop: {
    backgroundSize: 'cover',
    marginBottom: '0',
    height: 'auto',
    width: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor:"rgb(255,153,153,0.3)",
    opacity: "100%",
    zIndex: -1,
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    
  },

});

function ProductHeroLayout(props) {
  
  const { backgroundClassName, children, classes } = props;
  
  return (
    <section className={classes.root}>
      
      <Container maxWidth="sm" className={classes.container}>
     
        {children}
        
        <div className={classes.backdrop} />
        <div className={clsx(classes.background, backgroundClassName)} />
        
      </Container>
     
    </section>
  );
}

ProductHeroLayout.propTypes = {
  backgroundClassName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHeroLayout);
