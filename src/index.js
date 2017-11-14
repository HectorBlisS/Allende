import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {MuiThemeProvider} from "material-ui";
import injectTapEventPlugin from 'react-tap-event-plugin';

//redux
import {configureStore} from './redux/store/configureStore';
import {Provider} from 'react-redux';

import 'toastr/build/toastr.css';
import {getAllDistributors} from "./redux/actions/distributorActions";
import {comprobarUsuario} from "./redux/actions/userActions";
import {getInventario} from "./redux/actions/inventarioActions";
injectTapEventPlugin();

export const store = configureStore();
store.dispatch(getAllDistributors());
store.dispatch(comprobarUsuario());


const WithRouter =()=>(
  <BrowserRouter>
      <Provider store={store}>
         <Main/>
      </Provider>
  </BrowserRouter>
);

const Main = ()=>(
    <MuiThemeProvider>
        <App/>
    </MuiThemeProvider>
);

ReactDOM.render(<WithRouter />, document.getElementById('root'));
registerServiceWorker();
