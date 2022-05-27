import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
function SearchBar(props) {
    return (
        <div className='search-bar'>
            <input className='search-bar__input' onChange={props.handleSearchQuery}/>     
            <FontAwesomeIcon icon={faMagnifyingGlass} className='search-bar__icon' />
        </div>
    );
}

export default SearchBar;