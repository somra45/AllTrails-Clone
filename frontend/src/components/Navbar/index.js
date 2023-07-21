import './Navbar.css';
import LeftNav from './LeftNav.js';
import RightNav from './RightNav.js';

const Navbar = () => {
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