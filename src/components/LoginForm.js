import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  signUpButton: {
    marginTop: theme.spacing.unit * 2,
  }
})

class LoginForm extends React.Component {
  state = {
    username: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
  }


  handleInputChange = (event) => {
    event.persist();
    const { name, value } = event.target;

    this.setState((prevState) => ({
      [name]: {
        ...prevState[name],
        value,
      },
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    const { username, password } = this.state;

    console.log('Login:', username.value, password.value);

  }

  render() {
    const { classes } = this.props;
    const { username, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          name="username"
          required
          fullWidth
          label="Username"
          placeholder="Username..."
          type="text"
          margin="normal"
          autoComplete="username"
          value={username.value}
          onChange={this.handleInputChange}
          error={!username.isValid}
        />
        <TextField
          name="password"
          required
          fullWidth
          label="Password"
          placeholder="Password.."
          type="password"
          margin="normal"
          autoComplete="current-password"
          value={password.value}
          onChange={this.handleInputChange}
          error={!password.isValid}
        />
        <Button
          fullWidth
          variant="raised"
          type="submit"
          color="primary"
          className={classes.signUpButton}
        >
          Login
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(LoginForm);
