import React, { useState } from 'react';
import { loginMember, signupMember } from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './SignupForm.css'
import { Link } from 'react-router-dom';

const SignupFormPage = () => {
    const dispatch = useDispatch();
    const sessionMember = useSelector((state) => state.session.member);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionMember) {
        return <Redirect to='/' />
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        dispatch(signupMember({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        })).then(() => {
            if (errors.length < 1) {
                dispatch(loginMember({
                    email: email,
                    password: password
                }))
        }}).catch( async (response) => {
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
        })
    };

    const getErrorByField = (field) => {
        return errors.find((error) => {
            return error.includes(field)
        });
    };
    
    return (
        <div className='signup-module'>
            <div className='login-div' >
                <h1 className='login-header'> Sign up today to start planning <br></br> your next adventure</h1>
                <div className='signup-form-div'>
                    <form className='login-form' onSubmit={handleSubmit}>
                        <input className={ getErrorByField('Firstname') ? 'login-field-error' : 'login-field'} type='text' placeholder='First Name' 
                            value={firstname} onChange={(e) => {setFirstname(e.target.value)}}/>
                            { getErrorByField('Firstname') ? <span className='signup-error'>{getErrorByField('Firstname')}</span> : <span></span>}
                        <input className={ getErrorByField('Lastname') ? 'login-field-error' : 'login-field'} type='text' placeholder='Last Name' 
                            value={lastname} onChange={(e) => {setLastname(e.target.value)}}/>
                            { getErrorByField('Lastname') ? <span className='signup-error'>{getErrorByField('Lastname')}</span> : <span></span>}
                        <input className={ getErrorByField('Email') ? 'login-field-error' : 'login-field'} type='text' placeholder='Email Address' 
                            value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                            { getErrorByField('Email') ? <span className='signup-error'>{getErrorByField('Email')}</span> : <span></span>}
                        <input className={ getErrorByField('Password') ? 'login-field-error' : 'login-field'} type='password' placeholder='Password' 
                            value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                            { getErrorByField('Password') ? <span className='signup-error'>{getErrorByField('Password')}</span> : <span></span>}
                        <button className='login-submit' >Sign Up</button>
                    </form>
                    <p className='login-text'> Already have an account? <Link to='/login'>Log In</Link></p>
                </div>  
            </div>
        </div>
        
    );
};

export default SignupFormPage;   