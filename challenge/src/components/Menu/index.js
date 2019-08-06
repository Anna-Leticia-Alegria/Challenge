import React from 'react';
import Modal from 'react-modal'

import './index.less';

import home from '../../assets/menuIcons/home.svg';
import logOut from '../../assets/menuIcons/log-in.svg';
import plus from '../../assets/menuIcons/plus.svg';
import user from '../../assets/menuIcons/user.svg';


class Menu extends React.Component {
    state = {isModalOpen : false}

    handleCloseModal = () => {
        this.setState({isModalOpen : false})
    }

    onClickYesButton = () => {
        this.props.logOut();
        this.handleCloseModal();
    }

    render() {
        const {currentPage} = this.props
        const {isModalOpen} = this.state
        return (
            <div className="menuContainer">
                <div className="menuInfo" style={{display: (currentPage === "logIn") ? 'none' : ''}}>
                    <div className="menuButton" onClick = { () => this.props.setPage("home")} style={{backgroundColor:(currentPage === 'home') ? '#F5F5F5' : ''}} >
                        <img src={home} alt='home' width = "70%" />
                    </div>
                    <div className="menuButton" onClick = { () => this.props.setPage("profile")} style={{backgroundColor:(currentPage === 'profile') ? '#F5F5F5' : ''}} >
                        <img src={user} alt='user' width = "60%"/>
                    </div>
                    <div className="menuButton" onClick = { () => this.props.setPage("addAnime")} style={{backgroundColor:(currentPage === 'addAnime') ? '#F5F5F5' : ''}} >
                        <img src={plus} alt='plus' width = "60%"/>
                    </div>
                    <div className="menuButton" onClick = { () => {this.setState({isModalOpen : true})} } style={{backgroundColor:(currentPage === 'logOut') ? '#F5F5F5' : ''}} >
                        <img src={logOut} alt='logOut' width = "60%"/>
                    </div>
                    <Modal
                        className = "yesNoModal"
                        isOpen = {isModalOpen}
                        onRequestClose = {this.handleCloseModal}
                        ariaHideApp={false}
                        shouldFocusAfterRender={false}
                    >
                        <div>
                            Do you want to log out?
                        </div>
                        <div className = "yesNoContainer">
                            <div className = "yesNoButton" onClick = {this.onClickYesButton}>
                                Yes
                            </div>
                            <div className = "yesNoButton" onClick = {this.handleCloseModal}>
                                No
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Menu;