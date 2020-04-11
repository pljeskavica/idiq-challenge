import React, { useEffect } from 'react';
// HoC
import { withStyles } from '@material-ui/core/styles';
// Components
import MuiTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Row from 'components/TableRow';

// Hooks
import { useDispatch, useSelector } from 'react-redux';
// Actions
import { getSiteList } from 'actions/siteList';
// Selectors
import { sites } from 'selectors/siteList';

const styles = theme => ({
  root: {},
});

const Table = ({ classes }) => {
  const dispatch = useDispatch();
  const rows = useSelector(sites);
  useEffect(() => {
    dispatch(getSiteList());
  }, [dispatch]);

  return (
    <TableContainer classes={{ root: classes.root }} component={Paper}>
      <MuiTable className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Url</TableCell>
            <TableCell align="right">Download</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows.map(Row)}</TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default withStyles(styles)(Table);
