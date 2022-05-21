import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className="center-Items">
            <div>
                <h1>Plesae Log In</h1>
                <form onSubmit=""
                >
                    <input type="email" name="" id="" /><br/>
                    <input type="password" name="" id="" /><br/>
                    <input type="submit" value="Submit" />
                </form><br/>
                <p>New In Emajhon?</p>
                <Link to="/register">Register please</Link>
                <h3>------------OR-------------</h3>
                <button className="btn-regular">Log In with Google</button>
            </div>
        </div>
    );
};

export default Login;