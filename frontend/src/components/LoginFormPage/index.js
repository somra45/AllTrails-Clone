import React, { useState } from 'react';
import { loginMember } from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const LoginFormPage = () => {
    const dispatch = useDispatch();
    const sessionMember = useSelector((state) => state.session.member);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionMember) {
        return <Redirect to='/' />
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        dispatch(loginMember({
            credential: credential,
            password: password
        })).catch( async (response) => {
            let data;
            try {
                data = await response.clone().json();
            } catch {
                data = await response.text();
            }
            if (data?.errors) {
                setErrors(data.errors);
            } else if (data) {
                setErrors([data]);
            } else {
                setErrors([response.statusText]);
            }
        });
    };

    const handleDemo = (e) => {
        e.preventDefault();
        setCredential('demo@example.com');
        setPassword('Demopassword');
    }
    return (
        <div className='login-module'>
            <div className='login-div' >
                <h1 className='login-header'>Welcome Back. <br></br> Log in and start exploring.</h1>
                <div className='login-form-div'>
                    <form className='login-form' onSubmit={handleSubmit}>
                    <input className='login-field' type='text' placeholder='Email Address' 
                        value={credential} onChange={(e) => {setCredential(e.target.value)}}/>
                    <input className='login-field' type='password' placeholder='Password' 
                        value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                    <button className='login-submit' >Log in</button>
                    <button className='login-submit' onClick={handleDemo} >Demo Login</button>
                    <ul>
                        {errors.map((error) => <li>{error}</li>)}
                    </ul>
                    </form>
                    <p className='signup-text'> Don't have an account? <Link to='/signup'>Sign Up for free</Link></p>
                </div>  
            </div>
        </div>
        
    );
};

export default LoginFormPage;   