import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: "white",
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(10),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom:"10%",
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/static/themes/onepirate/productValues1.svg"
                alt="suitcase"
              />
              <Typography variant="h4" className={classes.title}>
                FIND INVESTORS
              </Typography>
              <Typography variant="h5">
                {'Free list of 3000+ global investors, from seed to late stage, with filters to help you find relevant investors.'}
          
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/static/themes/onepirate/productValues2.svg"
                alt="graph"
              />
              <Typography variant="h4" className={classes.title}>
                MANAGE LEADS
              </Typography>
              <Typography variant="h5">
                {'Build your own list of favorites, assign owner, set status and manage your deal funnel efficiently.'}
                
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/static/themes/onepirate/productValues3.svg"
                alt="clock"
              />
              <Typography variant="h4" className={classes.title}>
                SHARE DOCS
              </Typography>
              <Typography variant="h5">
                {'Upload your docs, invite investors to your data room and easliy manage who sees what.'}
                
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);