import React from 'react';

import './index.less';

import star from '../../assets/appIcons/favourites.svg';
import emptyStar from '../../assets/appIcons/emptyStar.svg';

class AnimeItem extends React.Component {
    animeInfo = {name: this.props.animeInfo.name, category: this.props.animeInfo.category, nEpisodes: this.props.animeInfo.nEpisodes, nStars: this.props.animeInfo.nStars, image: this.props.animeInfo.image};
    starArray = [];

    componentWillMount ()
    {
        for(let i=0;i<(5 - this.animeInfo.nStars);i++) {
            this.starArray.push(emptyStar);
        }
        for(let i=0;i<this.animeInfo.nStars;i++) {
            this.starArray.push(star);
        }
    }

    render (){
        return (
            <div className = "animeItemContainer">
                <div className = "animeInfoContainer">
                    <div className = "writtenInfoContainer">
                        <div style = {{height: '30%'}}>Name: {this.animeInfo.name} </div>
                        <div style = {{height: '30%'}}>Category: {this.animeInfo.category} </div>
                        <div style = {{height: '30%'}}>Episodes: {this.animeInfo.nEpisodes} </div>
                    </div>
                    <div className = "starImageInfoContainer">
                        <div className = "numberOfStars">
                            {this.starArray.map((typeOfStar) => {
                                return <div className = "starContainer"><img src = {typeOfStar} alt = 'rank' /></div>
                            })}
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
