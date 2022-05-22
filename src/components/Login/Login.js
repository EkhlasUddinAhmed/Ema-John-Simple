import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import useAuth from './../../hooks/useAuth';


const Login = () => {
     
    const {setloggedUser,signInWithGoogle}=useAuth();
    const navigate=useNavigate();

    const location=useLocation();
    console.log("Came From:",location.state?.from);
    const Redirect_uri=location.state?.from|| '/shop';

    const handleSignInWithGoogle=()=>{
        signInWithGoogle()
        .then((result) => {
            const user = result.user;
            console.log(user);
            // setloggedUser(user);
            
            navigate(Redirect_uri,{replace:true});
            
            
        }).catch((error) => {
            
            
            // const errorMessage = error.message;
            
            // console.log(errorMessage);
            // setError(errorMessage);
        });

    }
    
    return (
        <div className="center-Items">
            <div>
                <h1>Plesae Log In</h1>
                <form 
                >
                    <input type="email" name="" id="" /><br/>
                    <input type="password" name="" id="" /><br/>
                    <input type="submit" value="Submit" />
                </form><br/>
                <p>New In Emajhon?</p>
                <Link to="/register">Register please</Link>
                <h3>------------OR-------------</h3>
                <button onClick={handleSignInWithGoogle} className="btn-regular">Log In with Google</button>
            </div>
        </div>
    );
};

export default Login;