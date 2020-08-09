import React from 'react';
import HeaderSearchInput from './header-search-input/HeaderSearchInput';
import HeaderActionBar from './header-action-bar/HeaderActionBar';

const Header = () => {
    return (
        <>
            <div className="home-header-background"/>
            <div className="home-header">
                <HeaderActionBar/>
                <HeaderSearchInput/>
            </div>
        </>

    );
}

export default Header;
