import React from 'react';
import Modal from 'react-modal';

import './index.less';

import Stars from '../Stars/index';
import EditAnimePageModal from '../../modals/EditAnimePageModal/index'

class AnimePage extends React.Component {
    state = {isModalOpen : false}

    videoId () {
        const {animeInfo} = this.props
        return animeInfo.trailerUrl.substring(32);
    }

    handleCloseModal = () => {
        this.setState({isModalOpen : false})
    }

    render() {
        const {animeInfo} = this.props
        const {isModalOpen} = this.state
        if(animeInfo === null) {
            return <div className = "warningMessageContainer"> Please select an anime entry to see it's details</div>
        }
        return (
            <div className = "animePageContainer">
                <div className = "headerContainer">
                    <div className = "nameContainer">
                        {animeInfo.name}
                    </div>
                    <div className = "editButton" onClick = {() => this.setState({isModalOpen: true})}>
                        edit
                    </div>
                    <div className = "starsContainer">
                        <Stars nStars = {animeInfo.nStars} ranked = {animeInfo.ranked} />
                    </div>
                </div>
                <div className = "bodyContainer">
                    <div className = "animeImageContainer">
                        <img src = {animeInfo.image} alt = "anime" />
                    </div>
                    <div className = "infoContainer">
                        <div>
                            Category: {animeInfo.category}
                        </div>
                        <div>
                            Total episodes: {animeInfo.nEpisodes}
                        </div>
                        <div style ={{textAlign : 'justify'}}>
                            Synopsis: {animeInfo.synopsis}
                        </div>
                        <div>
                            Added at: {animeInfo.date}
                        </div>
                    </div>
                </div>
                <div className = "videoContainer">
                    <iframe title = "video player" src={"https://www.youtube.com/embed/" + this.videoId()} />
                </div>
                <Modal
                    className = "editAnimePageModal"
                    isOpen = {isModalOpen}
                    onRequestClose = {this.handleCloseModal}
                    ariaHideApp={false}
                    shouldFocusAfterRender={false}
                >
                    <EditAnimePageModal closeModal = {this.handleCloseModal}  animeInfo = {animeInfo}/>
                </Modal>
            </div>
        );
    }
}

export default AnimePage;