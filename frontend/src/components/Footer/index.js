import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer-module'>
            <div className='footer-div'>
            <img className='logo-footer' alt='logo' src='/assets/images/smalltrails-logo.png'></img>
                <h1 className='links-header'>Smalltrails</h1>
                <div className='links-div'>
                    <h1 className='footer-header'>Connect with us</h1>
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