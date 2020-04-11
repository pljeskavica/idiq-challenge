import React from 'react';
// HoC
import { withStyles } from '@material-ui/core/styles';
// Components
import Header from 'components/Header';
import Table from 'components/Table';
import Footer from 'components/Footer';

const styles = theme => ({
  root: {},
  form: {
    marginTop: 72,
  },
});

const Homepage = ({ classes }) => {
  return (
    <React.Fragment>
      <Header />
      <Table classes={{ root: classes.form }} />
      <Footer />
    </React.Fragment>
  );
};

export default withStyles(styles)(Homepage);
