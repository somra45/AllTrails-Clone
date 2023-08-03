import './Navbar.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logoutMember } from '../../store/session';
import { Redirect } from 'react-router-dom';


const RightNav = () => {
    const currentMember = sessionStorage.getItem('currentMember');
    const member = useSelector(state => state.session.member)
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
                    : <>
                            <div className='logged-in-container'>
                                <button className ='nav-button' onClick={handleLogout}><p id='button-text' >Log Out</p></button>  
                                <div className="profile-photo" style={{ backgroundImage: `url(${member.photoUrl})`}}></div>  
                            </div>
                      </>
                    }
                
            </div>
        </>
    );
};

export default RightNav