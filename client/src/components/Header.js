import React from 'react';
// HoC
import { withStyles } from '@material-ui/core/styles';
// Components
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    height: '60px',
  },
  title: {
    margin: 'auto',
  },
});

const Header = ({ classes }) => (
  <AppBar classes={{ root: classes.root }}>
    <Typography variant="h6" className={classes.title}>
      Site Scraper
    </Typography>
  </AppBar>
);

export default withStyles(styles)(Header);
