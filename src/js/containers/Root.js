import React from 'react';
import { Provider } from 'react-redux';

import Router from './router';

export default class Root extends React.Component {
    render() {
        let { store } = this.props;
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

Root.propTypes = {
    store: React.PropTypes.object
};
