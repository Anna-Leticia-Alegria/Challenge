import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'

import './index.less';
import 'react-perfect-scrollbar/dist/css/styles.css';

import AnimeItem from '../AnimeItem/index';

class AnimeList extends React.Component {
    animeList = [{name: 'sword art online', category: 'isekai', nEpisodes: '50', nStars: 5, image: 'https://www.rightstufanime.com/images/productImages/816546021009_anime-sword-art-online-box-set-dvd-primary.jpg?resizeid=5&resizeh=1000&resizew=1000'},
                {name: 'violet evergarden', category: 'drama', nEpisodes: '12', nStars: 5, image: 'https://i0.wp.com/animasso.com.br/wp-content/uploads/2018/02/Netflix-Violet-Evergarden-e1517406770923.png?fit=1020%2C653&ssl=1'},
                {name: 'gundam', category: 'mecha', nEpisodes: '60', nStars: 3, image: 'https://cdn.shoplightspeed.com/shops/608693/files/8187136/nozomi-ent-lucky-penny-mobile-suit-gundam-00-colle.jpg'},
                {name: 'pingu', category: 'kids', nEpisodes: '300', nStars: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLi-wGNqcflaXUqT5-nyeQ4efnq9X5obgLqWLl-zFnOGfP94jN'},
                {name: 'anohana', category: 'drama', nEpisodes: '24', nStars: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM7nxmkUU6Gdm6wMPwQpgfYQNNwzsO2tCqCK3bmUn7QDM7RN7nWQ'},
                {name: 'naruto shippuden', category: 'shounen', nEpisodes: '500', nStars: 4, image: 'https://img.quizur.com/f/img5cd8b07071f977.98133195.jpg?lastEdited=1557704823'}
            ];

    render (){
        return (
            <div className = "animeListContainer">
                <PerfectScrollbar>
                    {this.animeList.map((animeInfo) => {
                        return <AnimeItem animeInfo = {animeInfo}/>
                    })}
                </PerfectScrollbar>
            </div>  
        );
    }
}

export default AnimeList;