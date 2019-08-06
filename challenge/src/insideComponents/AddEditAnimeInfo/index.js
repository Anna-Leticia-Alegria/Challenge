import React from 'react';
import Dropdown from 'react-dropdown'

import 'react-dropdown/style.css'
import './index.less'

import Stars from '../Stars/index';

class AddEditAnimeInfo extends React.Component {
    state = {name: '', category: '', nEpisodes: '', date: '', ranked: false, nStars: 0, image: '', synopsis: "", trailerUrl: '', starsNotClicked: 0};
    categoryOptions = ['drama', 'isekai', 'shounen', 'shoujo'];

    onFormSubmit = (event) => {
        event.preventDefault(); //para impedir de atualizar a pagina depois de enivar o formulario
    }

    onSaveClick = () => {
        //setar date com a data que a pessoa fez isso (parse?)
        this.setState({name: '', category: '', nEpisodes: '', date: '', ranked: false, nStars: 0, image: '', synopsis: "", trailerUrl: '', starsNotClicked: 0});
        this.props.saveFunction(this.state)
    }

    onStarClick = (nStars) => {
        this.setState({nStars : nStars});
    }

    onStarMousePass = (nStars) => {
        this.setState({starsNotClicked : nStars});
    }

    onStarMouseLeave = () => {
        this.setState({starsNotClicked : 0});
    }

    render () {
        const {isEdit, animeInfo} = this.props
        const {name, category, nEpisodes, nStars,image, synopsis, trailerUrl, starsNotClicked} = this.state
        return (
            <div className = "addInfoContainer">
                <div className = "fieldInfoContainer">
                    <div className = "fieldNameContainer">
                        Name:
                    </div>
                    <form className = "formAddContainer" onSubmit = {this.onFormSubmit}>
                        <input 
                            className = "addInfoInputContainer"
                            type = "text" 
                            value = {(isEdit) ? animeInfo.name : name} 
                            onChange = {(event)=>{this.setState( { name : event.target.value } );}}
                            placeholder = "Type anime name here"
                        />
                    </form>
                </div>
                <div className = "fieldInfoContainer">
                    <div className = "fieldNameContainer">
                        Category:
                    </div>
                    <Dropdown 
                        className = "categoryDropdown" 
                        controlClassName = "categoryDropdown"
                        menuClassName = "categoryMenuDropdown"
                        options={this.categoryOptions} 
                        onChange={(event)=>{this.setState( { category : event.value } );}} 
                        value={(isEdit) ? animeInfo.category : category}
                        placeholder="Select an option" 
                    />
                </div>
                <div className = "fieldInfoContainer">
                    <div className = "fieldNameContainer">
                        Total episodes:
                    </div>
                    <form className = "formAddContainer" onSubmit = {this.onFormSubmit}>
                        <input 
                            className = "addInfoInputContainer"
                            type = "text" 
                            value = {(isEdit) ? animeInfo.nEpisodes : nEpisodes}
                            onChange = {(event)=>{this.setState( { nEpisodes : event.target.value } );}}
                            placeholder = "Type episodes number here"
                        />
                    </form>
                </div>
                <div className = "fieldInfoContainer">
                    <div className = "fieldNameContainer">
                        Synopsis:
                    </div>
                    <form className = "formAddContainer" onSubmit = {this.onFormSubmit}>
                        <input 
                            className = "addInfoInputContainer"
                            type = "text" 
                            value = {(isEdit) ? animeInfo.synopsis : synopsis} 
                            onChange = {(event)=>{this.setState( { synopsis : event.target.value } );}}
                            placeholder = "Type synopsis here"
                        />
                    </form>
                </div>
                <div className = "fieldInfoContainer" >
                    <div className = "fieldNameContainer">
                        Rank:
                    </div>
                    <div className = "addStarContainer">
                        <Stars nStars = {(isEdit) ? animeInfo.nStars : (nStars) ? nStars : starsNotClicked} 
                                ranked = {true} addStars = {true} 
                                onStarClick = {this.onStarClick} 
                                onStarMousePass = {this.onStarMousePass} 
                                onStarMouseLeave = {this.onStarMouseLeave}
                        />
                    </div>
                </div>
                <div className = "fieldInfoContainer">
                    <div className = "fieldNameContainer">
                        Image Link:
                    </div>
                    <form className = "formAddContainer" onSubmit = {this.onFormSubmit}>
                        <input 
                            className = "addInfoInputContainer"
                            type = "text" 
                            value = {(isEdit) ? animeInfo.image : image}  
                            onChange = {(event)=>{this.setState( { image : event.target.value } );}}
                            placeholder = "Paste image URL here"
                        />
                    </form>
                </div>
                <div className = "fieldInfoContainer">
                    <div className = "fieldNameContainer">
                        Trailer URL:
                    </div> 
                    <form className = "formAddContainer" onSubmit = {this.onFormSubmit}>
                        <input 
                            className = "addInfoInputContainer"
                            type = "text" 
                            value = {(isEdit) ? animeInfo.trailerUrl : trailerUrl}  
                            onChange = {(event)=>{this.setState( { trailerUrl : event.target.value } );}}
                            placeholder = "Paste youtube trailer URL here"
                        />
                    </form>
                </div>
                <div className = "saveButton" onClick = {this.onSaveClick}>
                    Save
                </div>
            </div>
        )
    }
}

export default AddEditAnimeInfo;