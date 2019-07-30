import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Menu from '../Menu/index'
import SideList from '../SideList/index'
import DisplayInfo from '../DisplayInfo';

class App extends React.Component {
    state = { loggedIn : false , currentPage : '' }
    render () {
        return (
            <div className = "appContainer">
                <Menu loggedIn = {this.state.loggedIn} currentPage = {this.state.currentPage} />
                <SideList loggedIn = {this.state.loggedIn} />
                <DisplayInfo loggedIn = {this.state.loggedIn} />
            </div>
        );
    }
}

export default App;