import React from 'react';

import './index.less';

import Stars from '../Stars/index';

class AnimePage extends React.Component {
    videoId () {
        const {animeInfo} = this.props
        return animeInfo.trailerUrl.substring(32);
    }
    render() {
        const {animeInfo} = this.props
        if(animeInfo === null) {
            return <div className = "warningMessageContainer"> Please select an anime entry to see it's details</div>
        }
        return (
            <div className = "animePageContainer">
                <div className = "headerContainer">
                    <div className = "nameContainer">
                        {animeInfo.name}
                    </div>
                    <div className = "editButton">
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
            </div>
        );
    }
}

export default AnimePage;