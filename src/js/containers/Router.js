import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import {Router as ReactRouter} from 'react-router';

import App from './App';
import Home from './Home';

class Router extends React.Component {
    render() {
        return (
            <ReactRouter history={browserHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home} />
                </Route>
            </ReactRouter>
        );
    }
}

export default Router;
