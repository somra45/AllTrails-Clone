import './Navbar.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logoutMember } from '../../store/session';
import { Redirect } from 'react-router-dom';


const RightNav = () => {
    const currentMember = sessionStorage.getItem('currentMember');
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
    }

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logoutMember(currentMember.id));
        return <Redirect to='/'/>
    }
    return (
        <>
            <div className='right-nav'>
                {!currentMember ? <><button className ='nav-button' onClick={handleClick}><Link to='/login' 
                    style={{ textDecoration: 'none' }}><p id='button-text' >Log In</p></Link></button> 
                    <button className ='nav-button' onClick={handleClick}><Link to='/signup' 
                    style={{ textDecoration: 'none' }}><p id='button-text' >Sign Up</p></Link> </button> </>
                    : <button className ='nav-button' onClick={handleLogout}><p id='button-text' >Log Out</p></button>  
                    }
                
            </div>
        </>
    );
};

export default RightNav