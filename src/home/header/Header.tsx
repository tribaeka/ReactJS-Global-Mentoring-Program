import React from 'react';
import ActionBar from './action-bar/ActionBar';
import SearchInput from './search-input/SearchInput';

const Header: React.FC = () => {
    return (
        <>
            <div className="home-header-background"/>
            <div className="home-header">
                <ActionBar/>
                <SearchInput/>
            </div>
        </>

    );
}

export default Header;
