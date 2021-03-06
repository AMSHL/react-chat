import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import WelcomePage from '../containers/WelcomePage';
import ChatPage from '../containers/ChatPage';
import PrivateRoute from '../containers/PrivateRoute';
import history from '../utils/history';

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
});

const App = ({ classes }) => (
  

    <Router history={history}>
      <div className={classes.root}>
        <Switch>
          <Route exact path="/(welcome)?" component={WelcomePage} />
          <PrivateRoute path="/chat/:chatId?" component={ChatPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
);

export default withStyles(styles)(App);
