import React from 'react';
// Components
import TableCell from '@material-ui/core/TableCell';
import MuiTableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
// Hooks
import { useDispatch } from 'react-redux';
import { getSiteHTML } from 'actions/siteHTML';

const TableRow = ({ url, name }) => {
  const dispatch = useDispatch();

  const onClick = site => () =>
    dispatch(getSiteHTML(site)).then(({ data }) => {
      const element = document.createElement('a');
      element.setAttribute(
        'href',
        'data:text/plain;charset=utf-8,' + encodeURIComponent(data),
      );
      element.setAttribute('download', `${site.name}.html`);

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    });

  return (
    <MuiTableRow data-test-id={`TableRow-root-${name}`} key={url}>
      <TableCell
        data-test-id={`TableRow-name-${name}`}
        component="th"
        scope="row"
      >
        {name}
      </TableCell>
      <TableCell
        data-test-id={`TableRow-url-${name}`}
        component="th"
        scope="row"
        align="left"
      >
        {url}
      </TableCell>
      <TableCell align="right">
        <IconButton
          data-test-id={`TableRow-downloadButton-${name}`}
          onClick={onClick({ name, url })}
        >
          <CloudDownloadIcon />
        </IconButton>
      </TableCell>
    </MuiTableRow>
  );
};

export default TableRow;
