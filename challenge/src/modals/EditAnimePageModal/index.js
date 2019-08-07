import React from 'react';

import './index.less';

import AddAnimeInfo from '../../insideComponents/AddEditAnimeInfo/index'

class EditAnimePageModal extends React.Component {
    state = {name: '', category: '', nEpisodes: '', date: '', ranked: false, nStars: 0, image: '', synopsis: "", trailerUrl: '', starsNotClicked: 0};

    saveFunction = (animeInfo) => {
        //abrir popup
        //mandar para o back os dados vindos do animeInfo
        this.setState({name: '', category: '', nEpisodes: '', date: '', ranked: false, nStars: 0, image: '', synopsis: "", trailerUrl: '', starsNotClicked: 0});
        this.props.closeModal()
    }

    render() {
        const {animeInfo} = this.props
        return (
            <div className="editAnimePageContainer">
                <div className = "editAnimeInfoHeader">
                    Edit Anime Entry
                </div>
                <AddAnimeInfo isEdit = {true} saveFunction = {this.saveFunction} animeInfo = {animeInfo}/>
            </div>
        );
    }
}

export default EditAnimePageModal;