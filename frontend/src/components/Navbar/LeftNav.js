import './Navbar.css'


const LeftNav = () => {
    return (
        <>
            <a className='logo-link' href='/'>
                <img className='logo' alt='logo' src='/assets/images/smalltrails-logo.png'></img>
                <h2 className='logo-header' >SmallTrails</h2>
            </a>
        </>
    );
};

export default LeftNav