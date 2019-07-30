import React from 'react';

import './index.less';

import home from '../../assets/menuIcons/home.svg';
import logOut from '../../assets/menuIcons/log-in.svg';
import plus from '../../assets/menuIcons/plus.svg';
import user from '../../assets/menuIcons/user.svg';


class Menu extends React.Component {

    render() {
        return (
            <div className="menuContainer">
                <div className="menuInfo" style={{display: (this.props.currentPage === "logIn") ? 'none' : ''}}>
                    <div className="button" onClick = { () => this.props.setPage("home")} style={{backgroundColor:(this.props.currentPage === 'home') ? '#F5F5F5' : ''}} >
                        <img src={home} alt='home' width = "70%" />
                    </div>
                    <div className="button" onClick = { () => this.props.setPage("profile")} style={{backgroundColor:(this.props.currentPage === 'profile') ? '#F5F5F5' : ''}} >
                        <img src={user} alt='user' width = "60%"/>
                    </div>
                    <div className="button" onClick = { () => this.props.setPage("addAnime")} style={{backgroundColor:(this.props.currentPage === 'addAnime') ? '#F5F5F5' : ''}} >
                        <img src={plus} alt='plus' width = "60%"/>
                    </div>
                    <div className="button" onClick = { () => this.props.setPage("logOut")} style={{backgroundColor:(this.props.currentPage === 'logOut') ? '#F5F5F5' : ''}} >
                        <img src={logOut} alt='logOut' width = "60%"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;