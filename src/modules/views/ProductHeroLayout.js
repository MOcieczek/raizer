import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Pointer from '../../assets/pointer-down.png';
import Background from '../../assets/background.png';



const styles = theme => ({
  root: {
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      height: '70vh',
      minHeight: 500,
      maxHeight: 1300,
    },
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  },
  backdrop: {
    backgroundImage:`url( ${Background} )`,
    backgroundSize: 'cover',
    height: 'auto',
    width: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor:"#574EFF",
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
    zIndex: -2,

   
  },
  arrowDown: {
    position: 'absolute',
    bottom: theme.spacing(4),
  },

});

function ProductHeroLayout(props) {
  
  const { backgroundClassName, children, classes } = props;
  
  return (
    <section className={classes.root}>
      
      <Container className={classes.container}>
     
        {children}
        
        <div className={classes.backdrop} />
        <div className={clsx(classes.background, backgroundClassName)} />
        <img
          className={classes.arrowDown}
          src={Pointer}
          height="32"
          width="32"
          alt="arrow down"
        />
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
