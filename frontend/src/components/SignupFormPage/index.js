import React, { useState } from 'react';
import { loginMember, signupMember } from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './SignupForm.css'
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const SignupFormPage = () => {
    const dispatch = useDispatch();
    const sessionMember = useSelector((state) => state.session.member);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const fileRef = useRef(null);
    const [photoUrl, setPhotoUrl] = useState(null);
    const [image, setImage] = useState(null);

    if (sessionMember) {
        return <Redirect to='/' />
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setErrors([]);
        const formData = new FormData(); 
        formData.append("member[firstname]", firstname);
        formData.append("member[lastname]", lastname);
        formData.append("member[email]", email);
        formData.append("member[password]", password);
        if (image) {
          formData.append('member[photo]', image);
        }
        dispatch(signupMember(formData)).then(() => {
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
        if (errors) {
            return errors.find((error) => {
                return error.includes(field)
            });
        }
    };

    const handleFile = ({ currentTarget }) => {
        const file = currentTarget.files[0];
        setImage(file);
        if (file) {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => setPhotoUrl(fileReader.result);
        };
      }
    return (
        <div className='signup-module'>
            <div className='login-div' >
                <h1 className='login-header'> Sign up today to start planning <br></br> your next adventure</h1>
                <div className='signup-form-div'>
                    <form className='login-form' onSubmit={handleSubmit}>
                        <input name="member[firstname]" className={ getErrorByField('firstname') ? 'login-field-error' : 'login-field'} type='text' placeholder='First Name' 
                            value={firstname} onChange={(e) => {setFirstname(e.target.value)}}/>
                            { getErrorByField('Firstname') ? <span className='signup-error'>{getErrorByField('Firstname')}</span> : <span></span>}
                        <input member="member[lastname]" className={ getErrorByField('lastname') ? 'login-field-error' : 'login-field'} type='text' placeholder='Last Name' 
                            value={lastname} onChange={(e) => {setLastname(e.target.value)}}/>
                            { getErrorByField('Lastname') ? <span className='signup-error'>{getErrorByField('Lastname')}</span> : <span></span>}
                        <input name="member[email]" className={ getErrorByField('email') ? 'login-field-error' : 'login-field'} type='text' placeholder='Email Address' 
                            value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                            { getErrorByField('Email') ? <span className='signup-error'>{getErrorByField('Email')}</span> : <span></span>}
                        <input name="member[password]" className={ getErrorByField('password') ? 'login-field-error' : 'login-field'} type='password' placeholder='Password' 
                            value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                            { getErrorByField('Password') ? <span className='signup-error'>{getErrorByField('Password')}</span> : <span></span>}
                        <button className='login-submit' >Sign Up</button>
                    </form>
                    <div className='display-box-image'>
                        <label>
                            Image to Upload
                            <input
                            type="file"
                            ref={fileRef}
                            accept=".jpg, .jpeg, .png"
                            onChange={handleFile} />
                        </label>
                    </div>
                    <p className='login-text'> Already have an account? <Link to='/login'>Log In</Link></p>
                </div>  
            </div>
        </div>
        
    );
};

export default SignupFormPage;   