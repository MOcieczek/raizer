import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: "#574EFF",

  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },


}));


export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        
              <Typography variant="h5" align="center">
              All rights reserved @ Raizer
            </Typography>
       
      </Container>
    </Typography>
  );
}
