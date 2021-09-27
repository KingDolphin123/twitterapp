import React from 'react';

const Header = () => {
    let headerTitle = "This is header";
    let numberOfUsers = 23;
    return (
        <div>
            <p>{headerTitle}</p>
            <p>Number of users: {numberOfUsers}</p>
        </div>
    )
}

export default Header;