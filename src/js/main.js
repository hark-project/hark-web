/* global document, module, require */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer} from 'react-hot-loader';

import Root from './containers/Root';
import configureStore from './store/configureStore';

let store = configureStore();

const render = (jsx) => {
    ReactDOM.render(jsx, document.getElementById('hark'));
};

render(
    <AppContainer>
        <Root store={store} />
    </AppContainer>
);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        const NextRoot = require('./containers/Root').default;
        render(
            <AppContainer>
                <NextRoot store={store} />
            </AppContainer>
        );
    });
}
