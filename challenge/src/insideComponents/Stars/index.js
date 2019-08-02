import React from 'react';

import './index.less';

import star from '../../assets/appIcons/favourites.svg';
import emptyStar from '../../assets/appIcons/emptyStar.svg';

class Stars extends React.Component {
    starArray = [];

    calculateStars ()
    {
        const {nStars} = this.props
        this.starArray = [];
        for(let i=0;i<nStars;i++) {
            this.starArray.push(star);
        }
        for(let i=0;i<(5 - nStars);i++) {
            this.starArray.push(emptyStar);
        }
    }

    render (){
        const {ranked, addStars} = this.props
        return (
            <div className = "numberOfStars">
                {this.calculateStars()}
                { (ranked) ? (this.starArray.map((typeOfStar, idx) => {
                    return <div key = {idx} className = "starContainer" 
                        onClick = {() => {if(addStars) {this.props.onStarClick (idx+1);}}}
                        onMouseEnter = {() => {if(addStars) {this.props.onStarMousePass (idx+1);}}}
                        onMouseLeave = {() => {if(addStars) {this.props.onStarMouseLeave ();}}}
                    ><img src = {typeOfStar} alt = 'rank' /></div>
                })) : 'new' }
            </div> 
        );
    }
}

export default Stars;
