import React from 'react';

import './index.less';

import AddAnimePage from '../../insideComponents/AddAnimePage/index';
import AnimePage from '../../insideComponents/AnimePage/index';
import LogInPage from '../../insideComponents/LogInPage/index';
import ProfilePage from '../../insideComponents/ProfilePage/index';

const DisplayPage = ({currentPage, currentAnimeItem, changePage}) => {

    switch(currentPage) {
        case "logIn":
        case "logOut":
            return <div className = "displayPageContainer"> <LogInPage changePage = {changePage}/> </div>
        case "home":
            return <div className = "displayPageContainer"> <AnimePage animeInfo = {currentAnimeItem}/> </div>
        case "profile":
            return <div className = "displayPageContainer"> <ProfilePage /> </div>
        case "addAnime":
            return <div className = "displayPageContainer"> <AddAnimePage /> </div>; 
        default:
            return <div> ERROR </div>;
    }
}

export default DisplayPage;