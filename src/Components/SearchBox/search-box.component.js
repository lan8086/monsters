import React from 'react';

import "./search-box.style.css";

export const Search = ({placeholder, onchangehandler}) => (
    <input 
    className = "search"
    type="search" 
    placeholder={placeholder}
    onChange={onchangehandler } />
)
