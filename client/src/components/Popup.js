import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Portal from '@material-ui/core/Portal';

const useStyles = makeStyles((theme) => ({
  dropdown: {
    position: 'fixed',
    textAlign: 'center',
    width: 200,
    top: '2%',
    left: '90%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function PortalClickAway(props) {
  const assign = props.assignl || 'solved';
  const classes = useStyles();

  return (
    <ClickAwayListener onClickAway={props.togglePopUpAway}>
      <div>
        {props.isPopUpOpen ? (
          <Portal>
            <div className={classes.dropdown}>ticket successfully assigned</div>
          </Portal>
        ) : null}
      </div>
    </ClickAwayListener>
  );
}
