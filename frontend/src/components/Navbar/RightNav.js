import './Navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


const RightNav = () => {
    const currentMember = useSelector((state) => state.member )

    const handleClick = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className='right-nav'>
                <button onClick={handleClick}><Link to='/login'>Log In</Link> </button> 
                <button onClick={handleClick}><Link to='/signup'>Sign Up</Link> </button> 
            </div>
        </>
    );
};

export default RightNav