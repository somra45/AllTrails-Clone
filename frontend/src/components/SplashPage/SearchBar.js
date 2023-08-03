import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearSearchResults, fetchSearchResults } from "../../store/searchReducer";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import './SearchBar.css'

const SearchBar = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState();
    const [timer, setTimer] = useState(0);
    const searchResults = useSelector((state) => Object.values(state.entities.search))

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchText(query);
        clearTimeout(timer);

        if (query.trim() !== '') {
            setTimer(setTimeout(() => dispatch(fetchSearchResults(query)), 300));
        } else {
            dispatch(clearSearchResults());
        }
    };

    const handleClick = (id) => {
        return (e) => {
            e.preventDefault();
            history.push(`/trails/${id}`);
            dispatch(clearSearchResults());
            setSearchText('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchText.trim() !== '') {
            history.push(`/trails/${searchResults[0].id}`);
            dispatch(clearSearchResults());
            setSearchText('');
        }
    }

    return (
        <>
            <div id="search-bar-container"> 
                <input type="text" id="search-input" value={searchText}
                 placeholder="search by city, trail name, or activity" 
                 onChange={handleSearch}
                >
                </input>
                <button id="search-button" onClick={handleSubmit} ><img className="arrow" src='/assets/images/searcharrow.svg' /></button>
                {searchText && searchResults && 
                <ul id="search-dropdown" >
                    <div className="dropdown-space"></div>
                    {searchResults.map((result) => 
                        <li onClick={handleClick(result.trailId)} className="search-result-item" key={result.id} >
                            <p className="search-result-item-name">{result.name}</p>
                            <p className="search-result-item-location">{result.location}</p>
                        </li> 
                    )}
                </ul>
                }
            </div>
        </>
    );
};

export default SearchBar;