import React from 'react';
// HoC
import { withStyles } from '@material-ui/core/styles';
// Components

const styles = theme => ({
  root: {
    backgroundColor: 'black',
  },
});

const Footer = ({ classes }) => (
  <div data-test-id={'Footer-root'} className={classes.root}>
    Footer
  </div>
);

export default withStyles(styles)(Footer);
