import React from 'react';

import './index.less';

import AddAnimeInfo from '../AddEditAnimeInfo/index'

class AddAnimePage extends React.Component {
    state = {name: '', category: '', nEpisodes: '', date: '', ranked: false, nStars: 0, image: '', synopsis: "", trailerUrl: '', starsNotClicked: 0};

    saveFunction = (animeInfo) => {
        //abrir popup
        //mandar para o back os dados vindos do animeInfo
        this.setState({name: '', category: '', nEpisodes: '', date: '', ranked: false, nStars: 0, image: '', synopsis: "", trailerUrl: '', starsNotClicked: 0});
    }

    render() {
        return (
            <div className="addAnimePageContainer">
                <div className = "addInfoHeader">
                    Add Anime Entry
                </div>
                <AddAnimeInfo isEdit = {false} saveFunction = {this.saveFunction} />
            </div>
        );
    }
}

export default AddAnimePage;