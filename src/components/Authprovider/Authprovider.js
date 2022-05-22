import React, { createContext } from 'react';
import useFirebase from './../../hooks/useFirebase';

export const AuthContext=createContext();

const Authprovider = (props) => {
    

 const allContext= useFirebase();


    return (
        <AuthContext.Provider value={allContext}>
           {
               props.children
           } 
        </AuthContext.Provider>
    );
};

export default Authprovider;