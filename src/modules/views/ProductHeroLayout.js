import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Background from '../../assets/background.png';
import Pointer from '../../assets/pointer-down.png';



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
    maxWidth:'300',
    minWidth:'200',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    
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
    maxHeight:30,
    maxWidth:30,
    marginTop: theme.spacing(5),
    
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
        
      </Container>
      <img
          className={classes.arrowDown}
          position="absolute"
          src={Pointer}
          alt="arrow down"
        />
    </section>
  );
}

ProductHeroLayout.propTypes = {
  backgroundClassName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHeroLayout);
