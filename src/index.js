import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'typeface-roboto';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    suppressDeprecationWarnings: true
  }
});

const rootEl =   document.getElementById('root');
 
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>, 
  rootEl);


if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>,
      rootEl);
  })
}

registerServiceWorker();





