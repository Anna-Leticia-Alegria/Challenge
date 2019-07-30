import React from 'react';
import ReactDOM from 'react-dom';

import './index.less';

import AddAnimePage from '../../insideComponents/AddAnimePage/index';
import AnimePage from '../../insideComponents/AnimePage/index';
import LogInPage from '../../insideComponents/LogInPage/index';
import ProfilePage from '../../insideComponents/ProfilePage/index';

const DisplayPage = ({currentPage, currentAnimeItem, changePage}) => {
    if(currentPage === "logIn" || currentPage === "logOut")
    {
        return <div className = "displayPageContainer"> <LogInPage changePage = {changePage}/> </div>;
    }
    else if(currentPage === "home")
    {
        return <div className = "displayPageContainer"> <AnimePage /> </div>; 
    }
    else if(currentPage === "profile")
    {
        return <div className = "displayPageContainer"> <ProfilePage /> </div>; 
    }
    else if(currentPage === "addAnime")
    {
        return <div className = "displayPageContainer"> <AddAnimePage /> </div>; 
    }
    else{
        return <div> ERROR </div>;
    }
}

export default DisplayPage;