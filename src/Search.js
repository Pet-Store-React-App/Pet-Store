import React from "react";
import './Search.css';

const Search = ({products, setSearchResults}) => {
    const handleSubmit = (e) => e.preventDefault();
    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(products);
        const resultsArray = products.filter(product => product.title.includes(e.target.value) || product.body.includes(e.target.value));
        setSearchResults(resultsArray);
    }

    return (
        <form className="search" onSubmit={handleSubmit}>
            <label>
                Search for item:
                <input className="search_input" type="text" id="search" onChange={handleSearchChange}/>
                <button className="search_button">Search</button>
            </label>
        </form>
    )
}

export default Search;