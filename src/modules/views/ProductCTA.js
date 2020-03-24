import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import Button from '../components/Button';
import InvestorList from '../../assets/investorList.png';

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
    backgroundColor: "#A8FFDB",
    padding: theme.spacing(8, 3),
  },
  cardContent: {
    maxWidth: 400,
  },

  button: {
    minWidth: 150,
  },
  imagesWrapper: {
    position: 'relative',
  },
  imageDots: {
    position: 'absolute',
    top: -67,
    left: -67,
    right: 0,
    bottom: 0,
    width: '100%',
    background: 'url(/static/onepirate/productCTAImageDots.png)',
  },
  image: {
    position: 'absolute',
    top: -28,
    left: -28,
    right: 0,
    bottom: 0,
    width: '100%',
    maxWidth: 600,
  },
});

function ProductCTA(props) {
  const { classes } = props;
  const [setOpen] = React.useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setOpen(true);
  };

  

  return (
    <Container className={classes.root} component="section">
      <Grid container>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
            <form onSubmit={handleSubmit} className={classes.cardContent}>
              <Typography variant="h2" component="h2" gutterBottom>
                Hey founders!
              </Typography>
              <Typography variant="h5">
                Sign up to our waitlist, and you'll be fundraising like a super star before you know it <Emoji symbol="✌️" label="winning"/>
              </Typography>
              <br></br>
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
            </form>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imagesWrapper}>
          <Hidden smDown>
            <div className={classes.imageDots} />
            <img
              src={InvestorList}
              alt="image"
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

