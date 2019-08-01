import React from 'react';

import './index.less';

import Stars from '../Stars/index';

class AnimeItem extends React.Component {
    animeInfo = this.props.animeInfo;

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
