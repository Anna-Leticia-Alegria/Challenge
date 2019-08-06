import React from 'react';

import './index.less';

import Menu from '../Menu/index'
import SideList from '../SideList/index'
import DisplayPage from '../DisplayPage';

class App extends React.Component {
    state = { loggedIn : false , currentPage : 'logIn' , animeSelected : null }

    setPage = (currentPage) => {
        this.setState({currentPage : currentPage});

        if(currentPage !== 'home') {
            this.setState({animeSelected : null});
        }
    }

    logOut = () => {
        this.setState({loggedIn : false})
        this.setState({currentPage : 'logIn'})
    }

    onAnimeSelected = (animeInfo) => {
        this.setState({animeSelected : animeInfo});
        this.setState({currentPage : 'home'});
    };

    render () {
        const {loggedIn, currentPage, animeSelected} = this.state
        return (
            <div className = "appContainer">
                <Menu loggedIn = {loggedIn} currentPage = {currentPage} setPage = {this.setPage} logOut = {this.logOut}/>
                <SideList loggedIn = {loggedIn} currentPage = {currentPage} onAnimeSelected = {this.onAnimeSelected} animeSelected = {animeSelected}/>
                <DisplayPage currentPage = {currentPage}  currentAnimeItem = {animeSelected} changePage = {this.setPage}/>
            </div>
        );
    }
}

export default App;