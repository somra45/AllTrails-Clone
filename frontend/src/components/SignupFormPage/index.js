import React, { useState } from 'react';
import { signupMember } from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './SignupForm.css'
import { Link } from 'react-router-dom';

const SignupFormPage = () => {
    const dispatch = useDispatch();
    const sessionMember = useSelector((state) => state.session.member);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionMember) {
        return <Redirect to='/login' />
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(signupMember({
            username: username,
            email: email,
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
    
    return (
        <div className='login-module'>
            <div className='login-div' >
                <h1 className='login-header'> Sign up today to start planning <br></br> your next adventure</h1>
                <div className='signup-form-div'>
                    <form className='login-form' onSubmit={handleSubmit}>
                    <input className='login-field' type='text' placeholder='Username' 
                        value={username} onChange={(e) => {setUsername(e.target.value)}}/>
                    <input className='login-field' type='text' placeholder='Email Address' 
                        value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                    <input className='login-field' type='password' placeholder='Password' 
                        value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                    <button className='login-submit' >Sign Up</button>
                    <ul>
                        {errors.map((error) => {
                            return <li key={error} >{error}</li>    
                        })}
                    </ul>
                        </form>
                    <p className='login-text'> Already have an account? <Link to='/login'>Log In</Link></p>
                </div>  
            </div>
        </div>
        
    );
};

export default SignupFormPage;   