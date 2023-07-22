import React, { useState } from 'react';
import { signupMember } from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './SignupForm.css'

const SignupFormPage = () => {
    const dispatch = useDispatch();
    const sessionMember = useSelector((state) => state.session.member);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionMember) {
        return <Redirect to='/login' />
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(signupMember({
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
    
    return (
        <div className='login-module'>
            <div className='login-div' >
                <h1 className='login-header'> Sign up today to start planning <br></br> your next adventure</h1>
                <div>
                    <form className='login-form' onSubmit={handleSubmit}>
                    <input className='login-field' type='text' placeholder='Email Address' 
                        value={credential} onChange={(e) => {setCredential(e.target.value)}}/>
                    <input className='login-field' type='password' placeholder='Password' 
                        value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                    <button className='login-submit' >Log in</button>
                    <ul>
                        {errors.map((error) => {
                            return <li key={error} >{error}</li>    
                        })}
                    </ul>
                        </form>
                </div>  
            </div>
        </div>
        
    );
};

export default SignupFormPage;   