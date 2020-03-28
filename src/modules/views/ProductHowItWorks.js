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
    backgroundColor: "white",
    backgroundColor: "white",

  },
  container: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(10),
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',

  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 35,
  },
  titles: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3), 
  
  },
  headline: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(10), 
  

  },
  icon: {
    color:"#574EFF", 
    
  }, 

});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
              <Typography variant="h3" className={classes.headline}>
                HOW IT WORKS
              </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <LocalAtmOutlined style={{ fontSize: 50 }} className={classes.icon}/>
                <Typography variant="h4" className={classes.titles}>
                FIND INVESTORS
                </Typography>
                <Typography variant="h5">
                Free list of 3000+ global investors, from seed to late stage, with filters to help you find the relevant ones.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <FavoriteBorderOutlined style={{ fontSize: 50 }} className={classes.icon}/>
                <Typography variant="h4" className={classes.titles}>
                MANAGE LEADS
                </Typography>
                <Typography variant="h5">
                Build your own list of favorites, assign owner, set status and manage your deal funnel efficiently.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
             <div className={classes.item}>
                <DescriptionOutlined style={{ fontSize: 50 }} className={classes.icon}/>
                <Typography variant="h4" className={classes.titles}>
                SHARE DOCS
                </Typography>
                <Typography variant="h5">
                Upload your docs, invite investors to your data room and easliy manage who sees what.
                </Typography>
              </div>  
            </Grid>
          </Grid>
        </div>
      </Container> 
    </section>
  );
}



ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
