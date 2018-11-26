import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import WelcomePage from '../components/WelcomePage';
import { signup } from '../actions/auth';
import { login } from '../actions/auth';
import { recieveAuth } from '../actions/auth';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.services.errors.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  signup,
  login,
  recieveAuth,
}, dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WelcomePage);
