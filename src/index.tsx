import * as React from 'react';
import * as ReactDOM from 'react-dom';


import {browserHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin = require("react-tap-event-plugin");

injectTapEventPlugin();

import App from './containers/App';
import reducer from './reducers';


const store = createStore(reducer, window.__SERVER_STATE, applyMiddleware(routerMiddleware(browserHistory), ReduxThunk));
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <App history={history}/>
        </MuiThemeProvider>
    </Provider>, document.getElementById("app")
);