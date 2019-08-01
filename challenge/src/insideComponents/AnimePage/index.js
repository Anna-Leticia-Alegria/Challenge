import React from 'react';

import './index.less';

import Stars from '../Stars/index';

class AnimePage extends React.Component {
    render() {
        if(this.props.animeInfo === null) {
            return <div className = "warningMessageContainer"> Please select an anime entry to see it's details</div>
        }
        return (
            <div className = "animePageContainer">
                <div className = "headerContainer">
                    <div className = "nameContainer">
                        {this.props.animeInfo.name}
                    </div>
                    <div className = "editButton">
                        edit
                    </div>
                    <div className = "starsContainer">
                        <Stars nStars = {this.props.animeInfo.nStars} ranked = {this.props.animeInfo.ranked} />
                    </div>
                </div>
                <div className = "bodyContainer">
                    <div className = "imageContainer">
                        <img src = {this.props.animeInfo.image} alt = "anime image" />
                    </div>
                    <div className = "infoContainer">
                        <div>
                            Category: {this.props.animeInfo.category}
                        </div>
                        <div>
                            Total episodes: {this.props.animeInfo.nEpisodes}
                        </div>
                        <div>
                            Synopsis: {this.props.animeInfo.synopsis}
                        </div>
                        <div>
                            Added at: {this.props.animeInfo.date}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AnimePage;