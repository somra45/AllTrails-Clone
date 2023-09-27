import './Navbar.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';

const LeftNav = () => {
    const sessionMember = useSelector((state) => state.session.member)
    return (
        <>
            <a className='logo-link' href='/'>
                <img className='logo' alt='logo' src='/assets/images/smalltrails-logo.png'></img>
                <h2 className='logo-header' >SmallTrails</h2>
                <Link className='explore-link' to='/explore'><p>Explore</p></Link>
                {sessionMember && 
                    <Link className='explore-link' to='/profile'><p>Profile</p></Link>
                }
                
            </a>
        </>
    );
};

export default LeftNav