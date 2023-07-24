import './Navbar.css';
import LeftNav from './LeftNav.js';
import RightNav from './RightNav.js';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const sessionMember = useSelector((state) => state.session.member)
    return (
        <>
            <div id='header' >
                <header className='nav-header'>
                    <nav className='nav'>
                        < LeftNav />
                        < RightNav />
                    </nav>
                </header>
            </div>
        </>
    );
};

export default Navbar;