import React from 'react';
import { Link } from 'react-router-dom';
import google from '../assets/google.jpg';
import apple from '../assets/apple.png';
import facebook from '../assets/facebook.png';

const FormContainer = () => {
    return (
        <div className="form-container">
            <h3>Please Enter your Account details</h3>
            <form>
                <h3>Email Or Username</h3>
                <input type="email" name="email" placeholder="Email" defaultValue="Johndoe@gmail.com" />
                <h3>Password</h3>
                <input type="password" name="password" placeholder="Password" defaultValue="********" />
                <Link to="/forgot-password" className='forgot-password'>Forgot Password</Link>
                <input type="submit" value="Sign in" />
            </form>
            <div className="social-login">
                <img src={google} style={{ borderRadius: '50%', backgroundColor: 'white' }} alt="Google" />
                <img src={apple} style={{ borderRadius: '50%', backgroundColor: 'white' }} alt="Apple" />
                <img src={facebook} style={{ borderRadius: '50%', backgroundColor: 'white' }} alt="Facebook" />
            </div>
            <br /><br />
            <h4><Link to="/create-account">Create a new account</Link></h4>
        </div>
    );
};

export default FormContainer;
