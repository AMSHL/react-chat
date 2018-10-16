import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import WelcomePage from '../components/WelcomePage';
import {signup} from "../actions/auth";
import {login} from "../actions/auth";

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => bindActionCreators({
  signup,
  login
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomePage);
