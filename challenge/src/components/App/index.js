import React from 'react';

import './index.less';

import Menu from '../Menu/index'
import SideList from '../SideList/index'
import DisplayPage from '../DisplayPage';

class App extends React.Component {
    state = { loggedIn : false , currentPage : 'logIn' , animeSelected : null }

    setPage = (currentPage) => {
        this.setState({currentPage : currentPage});

        if(currentPage != 'home') {
            this.setState({animeSelected : null});
        }
        console.log(currentPage);
    }

    onAnimeSelected = (animeInfo) => {
        this.setState({animeSelected : animeInfo});
        this.setState({currentPage : 'home'});
        console.log(animeInfo);
    };

    render () {
        return (
            <div className = "appContainer">
                <Menu loggedIn = {this.state.loggedIn} currentPage = {this.state.currentPage} setPage = {this.setPage}/>
                <SideList loggedIn = {this.state.loggedIn} currentPage = {this.state.currentPage} onAnimeSelected = {this.onAnimeSelected} animeSelected = {this.state.animeSelected}/>
                <DisplayPage currentPage = {this.state.currentPage}  currentAnimeItem = {this.state.animeSelected} changePage = {this.setPage}/>
            </div>
        );
    }
}

export default App;