import { useSelector } from "react-redux";
import './SplashPage.css';
import TrailsIndex from "./TrailsIndexBar";

const Splash = () => {
    const sessionMember = useSelector((state) => state.session.member);
    return (
        <>
            <div className="splash-main-div">
                <h1 className='splash-main-heading'>Find Your Outdoors</h1>
                <div className="search-bar-div">
                    <input type='text' className="search-input-field"></input>
                </div>
            </div>
            <div className="index-div">
                <h1 className="index-header">Local favorites near New York</h1>
                < TrailsIndex />
            </div>
        </>
    );
};

export default Splash;