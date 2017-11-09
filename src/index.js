import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {MuiThemeProvider} from "material-ui";
import injectTapEventPlugin from 'react-tap-event-plugin';

//redux
import {configureStore} from './store/configureStore';
import {Provider} from 'react-redux';

import 'toastr/build/toastr.css';
import {getAllDistributors} from "./actions/distributorActions";
import {comprobarUsuario} from "./actions/userActions";
injectTapEventPlugin();


const store = configureStore();
store.dispatch(getAllDistributors());
store.dispatch(comprobarUsuario());

const WithProvider = () => (
    <Provider store={store}>
        <WithRouter/>
    </Provider>
);

const WithRouter =()=>(
  <BrowserRouter>
      <Main/>
  </BrowserRouter>
);

const Main = ()=>(
    <MuiThemeProvider>
        <App/>
    </MuiThemeProvider>
);

ReactDOM.render(<WithProvider />, document.getElementById('root'));
registerServiceWorker();
