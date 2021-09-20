import React, { createContext, useState, useEffect } from 'react';

import { loginUser, loginByToken } from 'services/requests';

export const AuthContext = createContext({});

const token = localStorage.getItem('SessionToken');

export default function AuthProvider({ props }){
    const [user, setUser] = useState(null);

    useEffect(() => {
        if(token)
            loginByToken(token)
                .then((res) => {
                    setUser(res.data.user);
                })
                .catch((err) => {
                    if (err.response.data === 500 || err.response.data === 401)
                        localStorage.clear();
                });
    }, [token]);

    const signIn = (email, password) => 
        loginUser(email, password).then((res) => {
            setUser(res.data.user);
            localStorage.setItem('SessionToken', res.data.token);
        });
    
    const signOut = () => {
        localStorage.clear();
        setUser(null);
    }

    return (
        <AuthContext.Provider value = {{ signed: !!user, user, signIn, signOut }}>
            { props }
        </AuthContext.Provider>
    );
}