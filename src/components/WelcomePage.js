import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm2';
import BrandName from './BrandName';
import { Redirect } from 'react-router-dom'

const styles = theme => ({
  paper: {
    marginTop: 64 + theme.spacing.unit * 3,
    width: 500,
  },
  tabContent: {
    padding: theme.spacing.unit * 3,
  }
})

class WelcomePage extends React.Component {
  state = {
    activeTab: 0,
  }

  handleTabChage = (event, value) => {
    this.setState({ activeTab: value });
  }

  render() {
    const { classes, signup, login, isAuthenticated } = this.props;
    const { activeTab } = this.state;

    if (isAuthenticated){
      return (
        <Redirect to="/chat"/>
      );
    }
    return (
      <React.Fragment>
        <AppBar>
          <Toolbar>
           <BrandName />
          </Toolbar>
        </AppBar>
        <Grid container justify="center">
          <Grid item>
            <Paper className={classes.paper}>
              <AppBar position="static" color="default">
                <Tabs
                  value={activeTab}
                  onChange={this.handleTabChage}
                  fullWidth
                >
                  <Tab label="Login" />
                  <Tab label="Sign Up" />
                </Tabs>
              </AppBar>
              <div className={classes.tabContent}>
                {activeTab === 0 && <LoginForm onSubmit={login}/>}
                {activeTab === 1 && <SignupForm onSubmit={signup}/>}
              </div>
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(WelcomePage);
