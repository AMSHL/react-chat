import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import BrandName from './BrandName';

const styles = theme => ({
  appBar: {
    position: 'fixed',
    width: `calc(100% - 320px)`,
  },
});

const ChatHeader = ({ classes }) => (
  <AppBar color="primary" className={classes.appBar}>
    <Toolbar>
      <BrandName />
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(ChatHeader);
