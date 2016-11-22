import React from 'react';

export default App;

const App = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

App.propTypes = {
    children: React.PropTypes.array,
};
