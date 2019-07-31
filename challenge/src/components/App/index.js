import React from 'react';

import './index.less';

import Menu from '../Menu/index'
import SideList from '../SideList/index'
import DisplayPage from '../DisplayPage';

class App extends React.Component {
    state = { loggedIn : false , currentPage : 'logIn' }

    setPage = (currentPage) => {
        this.setState({currentPage : currentPage});
        console.log(currentPage);
    }

    render () {
        return (
            <div className = "appContainer">
                <Menu loggedIn = {this.state.loggedIn} currentPage = {this.state.currentPage} setPage = {this.setPage}/>
                <SideList loggedIn = {this.state.loggedIn} currentPage = {this.state.currentPage}/>
                <DisplayPage currentPage = {this.state.currentPage} changePage = {this.setPage} />
            </div>
        );
    }
}

export default App;