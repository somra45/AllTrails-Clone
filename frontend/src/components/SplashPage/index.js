
import './SplashPage.css';
import TrailsIndex from "./TrailsIndexBar";
import SearchBar from "./SearchBar";

const Splash = () => {
    return (
        <>
            <div className="splash-main-div">
                <h1 className='splash-main-heading'>Find Your Outdoors</h1>
                <SearchBar />
            </div>
            <div className="index-div">
                <h1 className="index-header">Local favorites near New York</h1>
                < TrailsIndex />
            </div>
        </>
    );
};

export default Splash;