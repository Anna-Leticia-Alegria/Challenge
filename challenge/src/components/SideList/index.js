import React from 'react';

import './index.less';

import search from '../../assets/searchIcons/search.svg';
import star from '../../assets/searchIcons/star.svg';

import SearchBar from '../../insideComponents/SearchBar/index';
import AnimeList from '../../insideComponents/AnimeList/index';

class SideList extends React.Component {
    state = { searchBy : 'name', searchResult : '', sortBy : 'name'}

    onSearchBarSubmit = (term) => {
        this.setState({searchResult : term});
        console.log("Term do SideList: " + term);
    }

    render(){
        const {currentPage, onAnimeSelected, animeSelected} = this.props
        const {searchBy, searchResult, sortBy} = this.state
        return (
            <div className = "sideListContainer" >
                <div style={{display: (currentPage === "logIn") ? 'none' : '', width: '100%', height: '100%'}} >
                    <div className = "searchContainer">
                        <div className = "searchByButton" onClick = { () => this.setState({searchBy : 'name'})} style={{backgroundColor:(searchBy === 'name') ? '#F0EBFF' : ''}} >
                            <img src = {search} alt = "search"/>
                        </div>
                        <div className = "searchByButton" onClick = { () => this.setState({searchBy : 'star'})} style={{backgroundColor:(searchBy === 'star') ? '#F0EBFF' : ''}} >
                            <img src = {star} alt = "star"/>
                        </div>
                        <SearchBar onFormSubmit = {this.onSearchBarSubmit} searchByStar = {(searchBy === 'star')}/>
                    </div>
                    
                    <div className = "sortByContainer">
                        <div className = "sortByButton" onClick = { () => this.setState({sortBy : 'name'})} style={{backgroundColor:(sortBy === 'name') ? '#F0EBFF' : ''}} >
                            Name
                        </div>
                        <div className = "sortByButton" onClick = { () => this.setState({sortBy : 'category'})} style={{backgroundColor:(sortBy === 'category') ? '#F0EBFF' : ''}} >
                            Category
                        </div>
                        <div className = "sortByButton" onClick = { () => this.setState({sortBy : 'date'})} style={{backgroundColor:(sortBy === 'date') ? '#F0EBFF' : ''}} >
                            Date
                        </div>
                        <div className = "sortByButton" onClick = { () => this.setState({sortBy : 'star'})} style={{backgroundColor:(sortBy === 'star') ? '#F0EBFF' : ''}} >
                            Star
                        </div>
                    </div>
                    <AnimeList  searchResult = {searchResult} sortBy = {sortBy} onAnimeSelected = {onAnimeSelected} animeSelected = {animeSelected}/>
                </div>
            </div>
        );
    }
}

export default SideList;