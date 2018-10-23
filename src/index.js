import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'typeface-roboto';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import configureStore from './store';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    suppressDeprecationWarnings: true
  }
});

const rootEl =   document.getElementById('root');
 
const store = configureStore();

const render = (Component) => {
  ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Component />
      </Provider>
    </MuiThemeProvider>, 
    rootEl
  );
}

render(App);
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  })
}

registerServiceWorker();





