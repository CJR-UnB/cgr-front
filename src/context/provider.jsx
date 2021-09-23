/* eslint-disable react/prop-types */
import React from 'react';

import useStorage from 'utils/useStorage';
 
import Context from './Context';

const StoreProvider = ({ children }) => {
    const [token, setToken] = useStorage('token');

    return(
        <Context.Provider value={{ token, setToken }}>
            {children}
        </Context.Provider>
    )
}

export default StoreProvider;