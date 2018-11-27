import React from 'react';

export const withContextConsumer = Consumer => WrappedComponent => props => (
    <Consumer>
        {contextState => <WrappedComponent {...contextState} {...props}/>}
    </Consumer>
);

export const withContextProvider = Provider => WrappedComponent => props => (
    <Provider>
        <WrappedComponent {...props}/>
    </Provider>
);
