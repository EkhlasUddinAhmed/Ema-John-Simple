import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
const Register = () => {
    return (
        <div className="register-Center">
            <div>
                <h3>Register Please</h3>
                <form onSubmit="">
                <input type="email" name="" id="" /><br/>
                    <input type="password" name="" id="" /><br/>
                    <input type="Re-Enter-Password" name="" id="" />
                    <input type="submit" value="Submit" />

                </form>
                 <p>Already Have An Account</p>
                 <Link to="/login">Sign In Please</Link>
                 <h3>-----------or-----------</h3>
                 <button className="btn-regular">Sign In With Google</button>
    
            </div>
        </div>
    );
};

export default Register;