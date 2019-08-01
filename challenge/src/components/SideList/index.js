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
        return (
            <div className = "sideListContainer" >
                <div style={{display: (this.props.currentPage === "logIn") ? 'none' : '', width: '100%', height: '100%'}} >
                    <div className = "searchContainer">
                        <div className = "searchByNameButton" onClick = { () => this.setState({searchBy : 'name'})} style={{backgroundColor:(this.state.searchBy === 'name') ? '#F0EBFF' : ''}} >
                            <img src = {search} alt = "search"/>
                        </div>
                        <div className = "searchByStarButton" onClick = { () => this.setState({searchBy : 'star'})} style={{backgroundColor:(this.state.searchBy === 'star') ? '#F0EBFF' : ''}} >
                            <img src = {star} alt = "star"/>
                        </div>
                        <SearchBar onFormSubmit = {this.onSearchBarSubmit} searchByStar = {(this.state.searchBy === 'star')}/>
                    </div>
                    
                    <div className = "sortByContainer">
                        <div className = "sortByNameButton" onClick = { () => this.setState({sortBy : 'name'})} style={{backgroundColor:(this.state.sortBy === 'name') ? '#F0EBFF' : ''}} >
                            Name
                        </div>
                        <div className = "sortByCategoryButton" onClick = { () => this.setState({sortBy : 'category'})} style={{backgroundColor:(this.state.sortBy === 'category') ? '#F0EBFF' : ''}} >
                            Category
                        </div>
                        <div className = "sortByDateButton" onClick = { () => this.setState({sortBy : 'date'})} style={{backgroundColor:(this.state.sortBy === 'date') ? '#F0EBFF' : ''}} >
                            Date
                        </div>
                        <div className = "sortByStarButton" onClick = { () => this.setState({sortBy : 'star'})} style={{backgroundColor:(this.state.sortBy === 'star') ? '#F0EBFF' : ''}} >
                            Star
                        </div>
                    </div>
                    <AnimeList  searchResult = {this.state.searchResult} sortBy = {this.state.sortBy} onAnimeSelected = {this.props.onAnimeSelected} animeSelected = {this.props.animeSelected}/>
                </div>
            </div>
        );
    }
}

export default SideList;