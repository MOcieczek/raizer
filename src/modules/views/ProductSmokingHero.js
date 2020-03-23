import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../components/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(9),    
    backgroundColor:"#574EFF",
    
  },
  button: {
    border: '4px solid currentColor',
    borderRadius: 0,
    height: 'auto',
    padding: theme.spacing(2, 5),
  },
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  buoy: {
    width: 60,
  },
});

function ProductSmokingHero(props) {
  const { classes } = props;

  return (
  
    <Container className={classes.root} component="section">
        <Typography variant="h4" component="span" align="center">
          THE ULTIMATE TOOL FOR FOUNDRAISING FOUNDERS
        </Typography>
        <br></br>
      <Typography variant="subtitle1" align="center">
      Brought to you by founders who know the struggle. 
      </Typography>
      {/*<img src="/static/themes/onepirate/producBuoy.svg" className={classes.buoy} alt="buoy" />*/}
    </Container>
  );
}

ProductSmokingHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductSmokingHero);
