import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { user, googleSignIn } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect = location.state?.from || '/home';

    const handleSignIn = () => {
        googleSignIn()
            .then((result) => {
                history.push(redirect);
            })
    }

    return (
        <div className="container d-flex justify-content-center py-5">
            <div className="w-50 border px-4 py-5 shadow-sm">
                <h1>Login Form</h1>
                <button onClick={handleSignIn} className="btn btn-warning form-control my-3 text-white">
                    <img src="https://i.ibb.co/93GM0Qf/34-345914-continue-with-google-white-g-logo-clipart-removebg-preview.png" className="me-2" width="25px" alt="" />
                    Login With Google</button>
                <p>Continue with Google sign in</p>
            </div>
        </div>
    );
};

export default Login;