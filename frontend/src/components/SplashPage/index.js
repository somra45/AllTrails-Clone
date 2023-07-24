import { useSelector } from "react-redux";
import './SplashPage.css';

const Splash = () => {
    const sessionMember = useSelector((state) => state.session.member);
    return (
        <>
            <div className="splash-main-div">
                <h1 className='splash-main-heading'>Find Your Outdoors</h1>
            </div>
        </>
    );
};

export default Splash;