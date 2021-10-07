import React from 'react';
import "../css/Header.css"

const Header = () => {
    let headerTitle = "header";
    return (
        <div className = 'title'>
            <p>{headerTitle}</p>
        </div>
    )
}

export default Header;