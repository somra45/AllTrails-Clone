import './Navbar.css'
import { Link } from 'react-router-dom'


const RightNav = () => {

    const handleClick = (e) => {
        e.preventDefault();

    }

    return (
        <>
            <div className='right-nav'>
                <button onClick={handleClick}><Link to='/login'>Login</Link> </button> 
            </div>
        </>
    );
};

export default RightNav