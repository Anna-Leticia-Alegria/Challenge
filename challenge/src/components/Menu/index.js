import React from 'react';
import ReactDOM from 'react-dom';

import './index.less';

import home from '../../assets/menuIcons/home.svg';
import logOut from '../../assets/menuIcons/log-in.svg';
import plus from '../../assets/menuIcons/plus.svg';
import user from '../../assets/menuIcons/user.svg';


class Menu extends React.Component {
    state = {currentPage : "home"};
    render() {
        return (
            <div className="menuContainer">
                <div className="menuInfo">
                    <div className="button" onClick = { () => {this.props.setPage("home"); this.setState({currentPage : "home"})}} style={{backgroundColor:(this.state.currentPage === 'home') ? '#F5F5F5' : ''}} >
                        <img src={home} alt='home' width = "70%" />
                    </div>
                    <div className="button" onClick = { () => {this.props.setPage("profile"); this.setState({currentPage : "profile"})}} style={{backgroundColor:(this.state.currentPage === 'profile') ? '#F5F5F5' : ''}} >
                        <img src={user} alt='user' width = "60%"/>
                    </div>
                    <div className="button" onClick = { () => {this.props.setPage("addAnime"); this.setState({currentPage : "addAnime"})}} style={{backgroundColor:(this.state.currentPage === 'addAnime') ? '#F5F5F5' : ''}} >
                        <img src={plus} alt='plus' width = "60%"/>
                    </div>
                    <div className="button" onClick = { () => {this.props.setPage("logOut"); this.setState({currentPage : "logOut"})}} style={{backgroundColor:(this.state.currentPage === 'logOut') ? '#F5F5F5' : ''}} >
                        <img src={logOut} alt='logOut' width = "60%"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;