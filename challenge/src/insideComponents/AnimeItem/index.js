import React from 'react';

import './index.less';

import Stars from '../Stars/index';

class AnimeItem extends React.Component {
    animeInfo = {name: this.props.animeInfo.name, category: this.props.animeInfo.category, nEpisodes: this.props.animeInfo.nEpisodes, date : this.props.animeInfo.date, ranked : this.props.animeInfo.ranked, nStars: this.props.animeInfo.nStars, image: this.props.animeInfo.image, synopsis: this.props.animeInfo.synopsis};

    render (){
        return (
            <div className = "animeItemContainer" onClick = { () => this.props.onAnimeSelected(this.animeInfo)} style={{backgroundColor:(this.props.animeSelected === this.animeInfo) ? '#C7B3FB' : ''}}>
                <div className = "animeInfoContainer">
                    <div className = "writtenInfoContainer">
                        <div className = "writtenInfo">Name: {this.animeInfo.name} </div>
                        <div className = "writtenInfo">Category: {this.animeInfo.category} </div>
                        <div className = "writtenInfo">Episodes: {this.animeInfo.nEpisodes} </div>
                        <div className = "writtenInfo">Date: {this.animeInfo.date} </div>
                    </div>
                    <div className = "starImageInfoContainer">
                        <div style = {{height: '20%'}}>
                            <Stars nStars = {this.animeInfo.nStars} ranked = {this.animeInfo.ranked} />
                        </div>
                        <div className = "imageContainer">
                            <img src = {this.animeInfo.image} alt = "animeImage"/>    
                        </div>
                    </div>
                </div>
            </div>  
        );
    }
}

export default AnimeItem;
