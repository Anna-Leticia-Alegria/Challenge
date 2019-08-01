import React from 'react';

import './index.less';

import star from '../../assets/appIcons/favourites.svg';
import emptyStar from '../../assets/appIcons/emptyStar.svg';

class Stars extends React.Component {
    starArray = [];

    calculateStars ()
    {
        this.starArray = [];
        for(let i=0;i<(5 - this.props.nStars);i++) {
            this.starArray.push(emptyStar);
        }
        for(let i=0;i<this.props.nStars;i++) {
            this.starArray.push(star);
        }
    }

    render (){
        return (
            <div className = "numberOfStars">
                {this.calculateStars()}
                { (this.props.ranked) ? (this.starArray.map((typeOfStar, idx) => {
                    return <div key = {idx} className = "starContainer"><img src = {typeOfStar} alt = 'rank' /></div>
                })) : 'new' }
            </div> 
        );
    }
}

export default Stars;
