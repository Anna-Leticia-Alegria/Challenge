import React from 'react';
import Scrollbar from 'react-perfect-scrollbar'

import './index.less';
import 'react-perfect-scrollbar/dist/css/styles.css';

import AnimeItem from '../AnimeItem/index';

class AnimeList extends React.Component {
    //animeList = this.props.searchResult;
    animeList = [{name: 'sword art online', category: 'isekai', nEpisodes: '50', date: '23/10/2015', ranked: true, nStars: 5, image: 'https://www.rightstufanime.com/images/productImages/816546021009_anime-sword-art-online-box-set-dvd-primary.jpg?resizeid=5&resizeh=1000&resizew=1000', synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique bibendum massa sit amet fringilla. Nulla laoreet lectus in velit congue porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla rhoncus lorem condimentum accumsan pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vitae augue tristique, laoreet odio sed, tristique nisi. Cras gravida eleifend condimentum. Praesent fringilla lorem nisi, nec interdum augue congue non. In at ligula pretium, sollicitudin lacus eu, elementum tortor. In eget diam euismod, fermentum mi eu, rutrum augue. Integer nec tellus et dui ultrices facilisis id a sapien. Donec aliquet et nisi et convallis. Nullam ultricies auctor odio, non mollis metus imperdiet in. Cras at consequat eros.", trailerUrl: 'https://www.youtube.com/watch?v=Z6I1IS6joFY'},
    {name: 'violet evergarden', category: 'drama', nEpisodes: '12', date: '24/10/2013', ranked: false, nStars: 0, image: 'https://i0.wp.com/animasso.com.br/wp-content/uploads/2018/02/Netflix-Violet-Evergarden-e1517406770923.png?fit=1020%2C653&ssl=1', synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique bibendum massa sit amet fringilla. Nulla laoreet lectus in velit congue porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla rhoncus lorem condimentum accumsan pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vitae augue tristique, laoreet odio sed, tristique nisi. Cras gravida eleifend condimentum. Praesent fringilla lorem nisi, nec interdum augue congue non. In at ligula pretium, sollicitudin lacus eu, elementum tortor. In eget diam euismod, fermentum mi eu, rutrum augue. Integer nec tellus et dui ultrices facilisis id a sapien. Donec aliquet et nisi et convallis. Nullam ultricies auctor odio, non mollis metus imperdiet in. Cras at consequat eros.", trailerUrl: 'https://www.youtube.com/watch?v=8iQXnBRb4vU'},
    {name: 'gundam', category: 'mecha', nEpisodes: '60', date: '23/05/2010', ranked: true, nStars: 3, image: 'https://cdn.shoplightspeed.com/shops/608693/files/8187136/nozomi-ent-lucky-penny-mobile-suit-gundam-00-colle.jpg', synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique bibendum massa sit amet fringilla. Nulla laoreet lectus in velit congue porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla rhoncus lorem condimentum accumsan pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vitae augue tristique, laoreet odio sed, tristique nisi. Cras gravida eleifend condimentum. Praesent fringilla lorem nisi, nec interdum augue congue non. In at ligula pretium, sollicitudin lacus eu, elementum tortor. In eget diam euismod, fermentum mi eu, rutrum augue. Integer nec tellus et dui ultrices facilisis id a sapien. Donec aliquet et nisi et convallis. Nullam ultricies auctor odio, non mollis metus imperdiet in. Cras at consequat eros.", trailerUrl: 'https://www.youtube.com/watch?v=a-tqZu8JrbU'},
    {name: 'pingu', category: 'kids', nEpisodes: '300', date: '23/10/2015', ranked: true, nStars: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLi-wGNqcflaXUqT5-nyeQ4efnq9X5obgLqWLl-zFnOGfP94jN', synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique bibendum massa sit amet fringilla. Nulla laoreet lectus in velit congue porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla rhoncus lorem condimentum accumsan pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vitae augue tristique, laoreet odio sed, tristique nisi. Cras gravida eleifend condimentum. Praesent fringilla lorem nisi, nec interdum augue congue non. In at ligula pretium, sollicitudin lacus eu, elementum tortor. In eget diam euismod, fermentum mi eu, rutrum augue. Integer nec tellus et dui ultrices facilisis id a sapien. Donec aliquet et nisi et convallis. Nullam ultricies auctor odio, non mollis metus imperdiet in. Cras at consequat eros.", trailerUrl: 'https://www.youtube.com/watch?v=XBGAfnS4A4o'},
    {name: 'anohana', category: 'drama', nEpisodes: '24', date: '23/08/2015', ranked: false, nStars: 0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM7nxmkUU6Gdm6wMPwQpgfYQNNwzsO2tCqCK3bmUn7QDM7RN7nWQ', synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique bibendum massa sit amet fringilla. Nulla laoreet lectus in velit congue porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla rhoncus lorem condimentum accumsan pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vitae augue tristique, laoreet odio sed, tristique nisi. Cras gravida eleifend condimentum. Praesent fringilla lorem nisi, nec interdum augue congue non. In at ligula pretium, sollicitudin lacus eu, elementum tortor. In eget diam euismod, fermentum mi eu, rutrum augue. Integer nec tellus et dui ultrices facilisis id a sapien. Donec aliquet et nisi et convallis. Nullam ultricies auctor odio, non mollis metus imperdiet in. Cras at consequat eros.", trailerUrl: 'https://www.youtube.com/watch?v=x8fvwC5xVGg'},
    {name: 'naruto shippuden', category: 'shounen', nEpisodes: '500', date: '02/01/2000', ranked: true, nStars: 4, image: 'https://img.quizur.com/f/img5cd8b07071f977.98133195.jpg?lastEdited=1557704823', synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique bibendum massa sit amet fringilla. Nulla laoreet lectus in velit congue porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla rhoncus lorem condimentum accumsan pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vitae augue tristique, laoreet odio sed, tristique nisi. Cras gravida eleifend condimentum. Praesent fringilla lorem nisi, nec interdum augue congue non. In at ligula pretium, sollicitudin lacus eu, elementum tortor. In eget diam euismod, fermentum mi eu, rutrum augue. Integer nec tellus et dui ultrices facilisis id a sapien. Donec aliquet et nisi et convallis. Nullam ultricies auctor odio, non mollis metus imperdiet in. Cras at consequat eros.", trailerUrl: 'https://www.youtube.com/watch?v=thh7bVCgDHs'}
    ];

    sortList() {
        if(this.props.sortBy === 'name') { //in case of equal names, uses the number of stars
            this.animeList.sort((a, b) => (a.name > b.name) ? 1 : (a.name === b.name) ? ((a.nStars > b.nStars) ? 1 : -1) : -1);
        }
        else if(this.props.sortBy === 'category') {
            this.animeList.sort((a, b) => (a.category > b.category) ? 1 : (a.category === b.category) ? ((a.name > b.name) ? 1 : -1) : -1);
        }
        else if(this.props.sortBy === 'date') {
            let indices = [ 6, 7, 8, 9, 3, 4, 0, 1 ];
            this.animeList.sort((a, b) => {
                var r = 0;
                indices.find(i => r = b.date.charCodeAt(i) - a.date.charCodeAt(i));
                return r;
            });
        }
        else {
            this.animeList.sort((a, b) => (a.nStars < b.nStars) ? 1 : (a.nStars === b.nStars) ? ((a.name > b.name) ? 1 : -1) : -1);
        }
    }

    render (){
        return (
            <div className = "animeListContainer">
                <Scrollbar>
                    {this.sortList()}
                    {this.animeList.map((animeInfo) => {
                        return <AnimeItem key = {animeInfo.name} animeInfo = {animeInfo} onAnimeSelected = {this.props.onAnimeSelected} animeSelected = {this.props.animeSelected}/>
                    })}
                </Scrollbar>
            </div>  
        );
    }
}

export default AnimeList;