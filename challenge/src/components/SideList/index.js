import React from 'react';
import ReactDOM from 'react-dom';

import './index.less';
import search from '../../assets/searchIcons/search.svg';
import star from '../../assets/searchIcons/star.svg';

import SearchBar from '../../insideComponents/SearchBar/index';

class SideList extends React.Component {
    render(){
        return (
            <div className = "sideListContainer">
                <div className = "searchContainer" style={{display: (this.props.currentPage === "logIn") ? 'none' : ''}}>
                    <div className = "searchByNameButton">
                        <img src = {search} alt = "search"/>
                    </div>
                    <div className = "searchByStarButton">
                        <img src = {star} alt = "star"/>
                    </div>
                    <SearchBar />
                </div>
            </div>
        );
    }
}

export default SideList;