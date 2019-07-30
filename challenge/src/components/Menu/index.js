import React from 'react';
import ReactDOM from 'react-dom';

import './index.less';

import home from '../../assets/menuIcons/home.svg';
import logOut from '../../assets/menuIcons/log-in.svg';
import plus from '../../assets/menuIcons/plus.svg';
import user from '../../assets/menuIcons/user.svg';


class Menu extends React.Component {

    onButtonClick = () => {
        //this.props.currentPage = 
    }

    render() {
        return (
            <div className="menuContainer">
                <div className="menuInfo">
                    <div className="button">
                        <img src={home} alt='home' width = "70%" />
                    </div>
                    <div className="button">
                        <img src={user} alt='user' width = "60%"/>
                    </div>
                    <div className="button">
                        <img src={plus} alt='plus' width = "60%"/>
                    </div>
                    <div className="button">
                        <img src={logOut} alt='logOut' width = "60%"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;