import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'

import './index.less';
import 'react-perfect-scrollbar/dist/css/styles.css';

import AnimeItem from '../AnimeItem/index';

class AnimeList extends React.Component {

    render (){
        return (
            <div className = "animeListContainer">
                <PerfectScrollbar>
                    <AnimeItem />
                    <AnimeItem />
                    <AnimeItem />
                    <AnimeItem />
                    <AnimeItem />
                    <AnimeItem />
                    <AnimeItem />
                    <AnimeItem />
                </PerfectScrollbar>
            </div>  
        );
    }
}

export default AnimeList;