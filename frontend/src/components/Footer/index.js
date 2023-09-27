import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer-module'>
            <div className='footer-div'>
            <img className='logo-footer' alt='logo' src='/assets/images/smalltrails-logo.png'></img>
                <div className='logo-div'>
                    <h1 className='links-header'>Smalltrails</h1>
                    <p className='footer-trail-attribute' > @2023 SmallTrails, All Rights Reserved</p>
                    <p className='footer-trail-attribute'> <a className='footer-link' href="https://www.flaticon.com/free-icons/park" title="park icons">Park icons on map created by setiawanap - Flaticon</a></p>
                </div>
                <div className='links-div'>
                    <h1 className='footer-header'>Connect with me</h1>
                    <a className='links' href='https://github.com/somra45'>
                        <img src='/assets/images/github-logo.png' alt='github-logo'/>
                    </a>
                    <a className='links' href='https://www.linkedin.com/in/harvinder-somra-39ba536a/'>
                        <img src='/assets/images/linkedin-logo.png' alt='linkedin-logo' />
                    </a>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer