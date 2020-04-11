import React from 'react';
import PropTypes from 'prop-types';
// HoC
import { withStyles } from '@material-ui/core/styles';
// Components
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
// Action
import { shiftSnackbar, closeSnackbar } from 'actions/snackbars';
// Utilities
import classNames from 'classnames';
// Icons
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import WarningIcon from '@material-ui/icons/Warning';
// Hooks
import { useDispatch, useSelector } from 'react-redux';
// Selectors
import { getSnackbars } from 'selectors/snackbars';
const styles = theme => ({
  success: {
    backgroundColor: '#43a047',
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: '#2196f3',
  },
  warning: {
    backgroundColor: '#ffa000',
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    color: 'white',
    display: 'flex',
    alignItems: 'center',
  },
  closeIcon: {
    color: 'white',
  },
});

const Icon = ({ variant, className }) => {
  if (!variant) return null;

  const icons = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
  };
  const Component = icons[variant];

  return <Component className={className} />;
};

const SnackbarController = ({ classes }) => {
  const dispatch = useDispatch();
  const snackbars = useSelector(getSnackbars);
  const [{ variant, message, closed } = {}] = snackbars || [];
  const snackbarOpen = snackbars.length && !closed;

  const onExited = () => dispatch(shiftSnackbar());
  const close = () => dispatch(closeSnackbar());
  const onClose = (e, reason) => reason !== 'clickaway' && close();

  return (
    <Snackbar
      open={snackbarOpen}
      onExited={onExited}
      onClose={onClose}
      ContentProps={{
        'aria-describedby': 'message-id',
        classes: { root: classes[variant] },
      }}
      TransitionComponent={Slide}
      autoHideDuration={3500}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon
            variant={variant}
            className={classNames(classes.icon, classes.iconVariant)}
          />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          className={classes.closeIcon}
          onClick={close}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
    />
  );
};

SnackbarController.propTypes = {
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
};

export default withStyles(styles)(SnackbarController);
