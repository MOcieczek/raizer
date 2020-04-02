import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import Button from '../components/Button';
import Placeholder from '../../assets/placeholder.png';

const Emoji = props => (
  <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
  >
      {props.symbol}
  </span>
);


const styles = theme => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: 30,
    display: 'flex',
  },
  cardWrapper: {
    zIndex: 1,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: "rgb(0,255,204,0.7)",
    padding: theme.spacing(8, 3),
  },
  cardContent: {
    maxWidth: 400,
  },

  button: {
    minWidth: 150,
    maxWidth: 150,
    variant: 'outlined',
    borderColor: 'white',
    backgroundColor: 'black',
    '&:hover': {
        backgroundColor: '#ffffff',
        color: '#000000'
    },
  },
  imagesWrapper: {
    position: 'relative',
  },


  image: {
    position: 'absolute',
    left: '10%',
    width: '100%',
    maxWidth: 600,
  },
});

function ProductCTA(props) {
  const { classes } = props;
  const [setOpen] = React.useState(false);


  

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
                Sign up to our waitlist, and you'll be fundraising like a super star before you know it <Emoji symbol="✌️" label="winning"/>
              </Typography>
              <br></br>
              <Button
                size="large"
                className={classes.button}
                component="a"
                target="_blank"
                href="https://raizerwaitlist.typeform.com/to/pBcsAG"
              >
                Waitlist
              </Button>
            </form>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imagesWrapper}>
          <Hidden smDown>
            <img
              src={Placeholder}
              alt="list"
              className={classes.image}
            />
          </Hidden>
        </Grid>
      </Grid>
 
    </Container>
  );
}


ProductCTA.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCTA);

