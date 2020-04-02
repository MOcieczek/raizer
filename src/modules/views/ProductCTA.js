import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import Button from '../components/Button';
import Placeholder from '../../assets/placeholder.png';
import Hidden from '@material-ui/core/Hidden';

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
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: "#574EFF",
    justifyContent: 'center',
    position: 'relative',
  },
  container: {  
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  button: {
    minWidth: 150,
    maxWidth: 150,
    variant: 'outlined',
    color: '#000000',
    backgroundColor: 'white',
    '&:hover': {
        backgroundColor: '#000000',
        color: '#ffffff'
    },
  },
  image: {
    position: 'relative',
    maxHeight: 300,
    padding: "3%",
    width: '70%',
    aspectRatio: 150 / 10,
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
    height: 400,
    justifyContent: 'center',
    alignItems: "left",
    maxWidth: 600,
  },
  h3: {
    color: "#ffffff",
  },

  h5: {
    color: "#ffffff",
  },
});

function ProductCTA(props) {
  const { classes } = props;
  const [setOpen] = React.useState(false);


  

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
      <Grid container>
        <Grid item xs={12} md={6}>
        <div className={classes.item}>
              <Typography variant="h3" className={classes.h3}>
                Hey founders!
              </Typography>
              <Typography variant="h5" className={classes.h5}>
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
          </div>
        </Grid>
        
        <Grid item xs={12} md={6}>
        <Hidden smDown>
        <div className={classes.item}>
            <img
              src={Placeholder}
              alt="list"
              className={classes.image}
            />
        </div>
        </Hidden>
        </Grid>
        </Grid>
    </Container>
    </section>
  );
}


ProductCTA.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCTA);

