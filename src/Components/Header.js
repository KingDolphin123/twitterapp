import React from 'react';
import "../css/Header.css";

const Header = () => {
    let headerTitle = "TwitterApp";
    return (
        <div className = 'title'>
            <p>{headerTitle}</p>
        </div>
    )
}

export default Header;