import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchTrails } from "../../store/trailsReducer";
import './ExplorePage.css'
import ExploreMapWrapper from "./ExploreMap";
import ExploreIndex from "./ExploreIndex";
import { fetchSearchResults, clearSearchResults } from "../../store/searchReducer";

const ExplorePage = () => {

    const smalltrails = Object.values(useSelector(state => state.entities.trails));
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState();
    const searchResults = Object.values(useSelector(state => state.entities.search));
    const [timer, setTimer] = useState(0);
    const [searchTrails, setSearchTrails] = useState(smalltrails)

    useEffect(() => {
        dispatch(fetchTrails());
    }, [])

    const handleSubmit = (e) => {
        const submitQuery = e.target.value
        dispatch(fetchSearchResults(submitQuery)).then(() => {
            setSearchTrails(searchResults)
        })
    }

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchText(query);
        clearTimeout(timer);
        setTimer(setTimeout(() => dispatch(fetchSearchResults(query)), 300))
    };

    return (
        <>
            {/* {searchResults !== {} ?  
            <div className="explore-page-div">
                <div className="explore-trails-div"> 
                <div className="explore-search-bar-div">
                    <input type="text" className="explore-search-input" value={searchText}
                    placeholder="search by city, trail name, or activity" 
                    onChange={handleSearch}
                    onSubmit={handleSubmit}
                    ></input>
                </div>
                    <ExploreIndex trails={searchTrails}/>
                </div>
                <ExploreMapWrapper trails={searchTrails} />
            </div>
            :  */}
            <div className="explore-page-div">
                <div className="explore-trails-div"> 
                {/* <div className="explore-search-bar-div"> */}
                    {/* <input type="text" className="explore-search-input" value={searchText}
                    placeholder="search by city, trail name, or activity" 
                    onChange={handleSearch}
                    ></input> */}
                {/* </div> */}
                    <ExploreIndex />
                </div>
                <ExploreMapWrapper trails={smalltrails} />
            </div>
            
            {/* } */}
        </>
    );
};

export default ExplorePage;