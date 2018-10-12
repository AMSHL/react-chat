import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  signUpButton: {
    marginTop: theme.spacing.unit * 2,
  }
})

class SignupForm extends React.Component {
  state = {
    username: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
    repeatedPassword: {
      value: '',
      isValid: true,
    },
  }

  validate = () => {
    const { password, repeatedPassword } = this.state;
    const isValid = password.value === repeatedPassword.value;

    this.setState({
      password: { ...password, isValid },
      repeatedPassword: { ...repeatedPassword, isValid },
    });

    return isValid;
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

    if (!this.validate()) {
      return;
    } 

    const { username, password } = this.state;

    console.log('Sign up:', username.value, password.value);

  }

  render() {
    const { classes } = this.props;
    const { username, password, repeatedPassword } = this.state;

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
          placeholder="Password..."
          type="password"
          margin="normal"
          autoComplete="new-password"
          value={password.value}
          onChange={this.handleInputChange}
          error={!password.isValid}
        />
        <TextField
          name="repeatedPassword"
          required
          fullWidth
          label="Repeat password"
          placeholder="Repeat your password..."
          type="password"
          margin="normal"
          autoComplete="new-password"
          value={repeatedPassword.value}
          onChange={this.handleInputChange}
          error={!repeatedPassword.isValid}
        />
        <Button
          fullWidth
          variant="raised"
          type="submit"
          color="primary"
          className={classes.signUpButton}
        >
          Signup
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(SignupForm);
