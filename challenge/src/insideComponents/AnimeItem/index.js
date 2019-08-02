import React from 'react';

import './index.less';

import Stars from '../Stars/index';

class AnimeItem extends React.Component {

    render (){
        const {animeSelected, animeInfo} = this.props
        return (
            <div className = "animeItemContainer" onClick = { () => this.props.onAnimeSelected(animeInfo)} style={{backgroundColor:(animeSelected === this.animeInfo) ? '#C7B3FB' : ''}}>
                <div className = "animeInfoContainer">
                    <div className = "writtenInfoContainer">
                        <div className = "writtenInfo">Name: {animeInfo.name} </div>
                        <div className = "writtenInfo">Category: {animeInfo.category} </div>
                        <div className = "writtenInfo">Episodes: {animeInfo.nEpisodes} </div>
                        <div className = "writtenInfo">Date: {animeInfo.date} </div>
                    </div>
                    <div className = "starImageInfoContainer">
                        <div style = {{height: '20%'}}>
                            <Stars nStars = {animeInfo.nStars} ranked = {animeInfo.ranked} addStars = {false}/>
                        </div>
                        <div className = "imageContainer">
                            <img src = {animeInfo.image} alt = "animeImage"/>    
                        </div>
                    </div>
                </div>
            </div>  
        );
    }
}

export default AnimeItem;
