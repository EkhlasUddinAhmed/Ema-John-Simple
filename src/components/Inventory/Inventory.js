import React from 'react';
import useAuth from './../../hooks/useAuth';

const Inventory = () => {
    
    const {loggedUser}=useAuth();
    return (
        <div>
            <h2>This is Inventory:{loggedUser.email}</h2>
        </div>
    );
};

export default Inventory;