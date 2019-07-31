import React from 'react';

import './index.less';

import star from '../../assets/appIcons/favourites.svg';
import emptyStar from '../../assets/appIcons/favourites.svg';

class AnimeItem extends React.Component {
    animeInfo = {name: 'isuhfis ifhdisuf isudhfiusdf iushfisf', category: '', nEpisodes: '1235', nStars: 5, image: 'https://www.rightstufanime.com/images/productImages/816546021009_anime-sword-art-online-box-set-dvd-primary.jpg?resizeid=5&resizeh=1000&resizew=1000'}
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
